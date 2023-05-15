import { buffer } from "micro";
import prisma from "@/prisma/prisma";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

const fullfillOrder = async (session) => {
  console.log(`✅ ORDER FULLFILLED: ${session.id}`);

  let user = await prisma.user.findUnique({
    where: { email: session.metadata.email },
  });

  if (!user) {
    user = await prisma.user.create({
      data: {
        email: session.metadata.email,
      },
    });
  }

  await prisma.order.create({
    data: {
      transactionId: session.id,
      amountTotal: session.amount_total / 100,
      amountShipping: session.total_details.amount_shipping / 100,
      user: {
        connect: { id: user.id },
      },
    },
  });

  return;
};

async function webhook(req, res) {
  if (req.method === "POST") {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      console.log(`❌ WEBHOOK ERROR:`, err.message);
      return res.status(400).send(`WEBHOOK ERROR: ${err.message}`);
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      try {
        await fullfillOrder(session);
      } catch (err) {
        console.log(`❌ DB ERROR:`, err.message);
        return res.status(400).send(`DB ERROR: ${err.message}`);
      }

      console.log(`✅ ORDER DATA UPLOADED: ${session.id}`);
      res.status(200).send(`ORDER DATA UPLOADED: ${session.id}`);
    }
  }
}

export default webhook;

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

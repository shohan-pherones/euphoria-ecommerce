const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function CreateStripeSession(req, res) {
  const { items } = req.body;

  const redirectURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "http://localhost:3000";

  const modifiedItems = items.map((item) => ({
    price_data: {
      currency: "usd",
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        images: [item.imageUrl],
      },
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions?.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: [],
    },
    line_items: modifiedItems,
    mode: "payment",
    success_url: redirectURL + "?status=success",
    cancel_url: redirectURL + "?status=cancel",
    metadata: {
      images: JSON.stringify(items.map((item) => item.imageUrl)),
    },
  });

  return res.status(200).json({
    id: session?.id,
  });
}

export default CreateStripeSession;

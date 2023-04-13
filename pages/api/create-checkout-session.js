const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function CreateStripeSession(req, res) {
  const { items } = req.body;

  const redirectURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.HOST;

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
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: { amount: 0, currency: "usd" },
          display_name: "Free shipping",
          delivery_estimate: {
            minimum: { unit: "business_day", value: 5 },
            maximum: { unit: "business_day", value: 7 },
          },
        },
      },
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: { amount: 1500, currency: "usd" },
          display_name: "Next day air",
          delivery_estimate: {
            minimum: { unit: "business_day", value: 1 },
            maximum: { unit: "business_day", value: 1 },
          },
        },
      },
    ],
    line_items: modifiedItems,
    mode: "payment",
    success_url: redirectURL + "/success",
    cancel_url: redirectURL + "/failed",
    metadata: {
      images: JSON.stringify(items.map((item) => item.imageUrl)),
    },
  });

  return res.status(200).json({
    id: session?.id,
  });
}

export default CreateStripeSession;

import { getAllProducts, getProduct } from "@/prisma/products";

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case "GET": {
        if (req.query.id) {
          const product = await getProduct(req.query.id);
          return res.status(200).json(product);
        } else {
          const products = await getAllProducts();
          return res.status(200).json(products);
        }
      }

      default:
        break;
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

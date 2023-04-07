import { getProduct } from "@/prisma/products";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const product = await getProduct(req.query.productId);
      return res.status(200).json(product);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

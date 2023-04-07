import { getAllProducts } from "@/prisma/products";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const products = await getAllProducts();
      return res.status(200).json(products);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

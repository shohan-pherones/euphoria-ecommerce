import prisma from "./prisma";

// GET ALL PRODUCTS
export const getAllProducts = async () => {
  const products = await prisma.product.findMany({});
  return products;
};

// GET A SINGLE PRODUCT
export const getProduct = async (id) => {
  const product = await prisma.product.findUnique({
    where: { id },
  });
  return product;
};

import { getProduct } from "@/prisma/products";

const ProductDetails = ({ product }) => {
  return (
    <div>
      <p>{product.title}</p>
    </div>
  );
};

export default ProductDetails;

export const getServerSideProps = async ({ query }) => {
  const product = await getProduct(query.productId);

  const updatedProduct = {
    ...product,
    updatedAt: product.updatedAt.toString(),
    createdAt: product.createdAt.toString(),
  };

  return {
    props: {
      product: updatedProduct,
    },
  };
};

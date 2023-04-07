import Slider from "@/components/Slider";
import ProductsPage from "./products";
import { getAllProducts } from "@/prisma/products";

const HomePage = ({ products }) => {
  return (
    <div>
      <Slider />
      <ProductsPage products={products} />
    </div>
  );
};

export default HomePage;

export const getServerSideProps = async () => {
  const products = await getAllProducts();

  const updatedProducts = products.map((product) => ({
    ...product,
    updatedAt: product.updatedAt.toString(),
    createdAt: product.createdAt.toString(),
  }));

  return {
    props: {
      products: updatedProducts,
    },
  };
};

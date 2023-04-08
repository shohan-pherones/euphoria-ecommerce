import Slider from "@/components/Slider";
import ProductsPage from "./products";
import { getAllProducts } from "@/prisma/products";
import Countdown from "@/components/Countdown";

const HomePage = ({ products }) => {
  const endDate = new Date().getTime() + 48 * 60 * 60 * 1000;

  return (
    <div>
      <Slider />
      <ProductsPage products={products} />
      <Countdown endDate={endDate} />
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

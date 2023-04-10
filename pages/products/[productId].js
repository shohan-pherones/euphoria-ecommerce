import { useCallback, useState } from "react";
import { getProduct } from "@/prisma/products";
import { addToCart } from "@/store/productSlice";
import { useDispatch } from "react-redux";
import { formatCurrency } from "@/utils/formatCurrency";
import Image from "next/image";
import Link from "next/link";

const ProductDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = useCallback(() => {
    setQuantity(quantity === 1 ? 1 : (prev) => prev - 1);
  }, [quantity]);

  const handleIncrease = useCallback(() => {
    setQuantity((prev) => prev + 1);
  }, []);

  const dispatch = useDispatch();

  return (
    <div className="wrapper my-10 grid lg:grid-cols-2 gap-10">
      <Image
        priority
        unoptimized
        loader={() => product.imageUrl}
        src={product.imageUrl}
        width={500}
        height={500}
        alt={product.title}
        className="w-full h-full object-cover"
      />

      <div className="flex flex-col gap-5">
        <span className="uppercase tracking-widest font-semibold text-sm text-cyan-500">
          {product.category}
        </span>
        <h2 className="text-4xl">{product.title}</h2>
        <div className="flex gap-10 items-center">
          <p className="text-2xl text-rose-500 font-medium">
            {formatCurrency(product.price * quantity)}
          </p>
          <div className="counter flex items-center bg-gray-100 text-2xl">
            <button
              onClick={handleDecrease}
              className="bg-gray-700 text-white h-10 w-10 flex items-center justify-center hover:bg-cyan-500 duration-300"
            >
              -
            </button>
            <span className="h-10 w-10 flex items-center justify-center">
              {quantity}
            </span>
            <button
              onClick={handleIncrease}
              className="bg-gray-700 text-white h-10 w-10 flex items-center justify-center hover:bg-cyan-500 duration-300"
            >
              +
            </button>
          </div>
        </div>
        <Link
          onClick={() => dispatch(addToCart({ ...product, quantity }))}
          href="/cart"
          className="bg-cyan-500 text-center py-3 text-white text-xl font-medium hover:bg-cyan-600 duration-300 mt-5"
        >
          Add to Cart
        </Link>
        <div className="mt-5">
          <p className="font-medium mb-3">Description:</p>
          <p className="text-gray-500">{product.description}</p>
        </div>
      </div>
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

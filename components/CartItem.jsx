import { formatCurrency } from "@/utils/formatCurrency";
import Image from "next/image";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const CartItem = ({ product }) => {
  return (
    <div
      key={product.id}
      className="product grid grid-cols-5 gap-10 border-b pb-5 mt-5"
    >
      <div className="left flex col-span-2 gap-5">
        <Image
          priority
          unoptimized
          loader={() => product.imageUrl}
          src={product.imageUrl}
          width={500}
          height={500}
          alt={product.title}
          className="w-24 h-24 object-cover"
        />
        <div className="details flex flex-col items-start gap-2">
          <span>{product.title}</span>
          <button className="linear-walkaways uppercase text-gray-400">
            Remove
          </button>
        </div>
      </div>
      <p className="unit-price">{formatCurrency(product.price)}</p>
      <div className="counter flex">
        <button className="w-10 h-10 bg-gray-50 border flex justify-center items-center active:bg-gray-700 active:text-gray-50">
          <BsChevronDown />
        </button>
        <span className="w-10 h-10 bg-gray-50 border-t border-b flex justify-center items-center active:bg-gray-700 active:text-gray-50">
          {product.quantity}
        </span>
        <button className="w-10 h-10 bg-gray-50 border flex justify-center items-center active:bg-gray-700 active:text-gray-50">
          <BsChevronUp />
        </button>
      </div>

      <div className="total-price ml-auto">
        <span>{formatCurrency(product.price * product.quantity)}</span>
      </div>
    </div>
  );
};

export default CartItem;

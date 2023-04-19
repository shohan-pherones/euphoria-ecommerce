import Image from "next/image";
import { formatCurrency } from "@/utils/formatCurrency";
import { useDispatch } from "react-redux";
import { removeItem } from "@/store/productSlice";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div
      key={product.id}
      className="product grid grid-cols-5 gap-10 border-b pb-5 mt-5 max-[425px]:gap-2 max-[425px]:mt-2 max-[425px]:pb-2"
    >
      <div className="left flex col-span-2 gap-5 max-[425px]:gap-2">
        <Image
          priority
          unoptimized
          loader={() => product.imageUrl}
          src={product.imageUrl}
          width={500}
          height={500}
          alt={product.title}
          className="img w-24 h-24 object-cover"
        />
        <div className="details flex flex-col items-start gap-2">
          <span>{product.title}</span>
          <button
            onClick={() => dispatch(removeItem(product))}
            className="linear-walkaways uppercase text-gray-400"
          >
            Remove
          </button>
        </div>
      </div>
      <p className="unit-price text-center">{formatCurrency(product.price)}</p>
      <p className="quantity text-center">{product.quantity}</p>
      <div className="total-price ml-auto">
        <span>{formatCurrency(product.price * product.quantity)}</span>
      </div>
    </div>
  );
};

export default CartItem;

import { formatCurrency } from "@/utils/formatCurrency";
import Image from "next/image";
import Link from "next/link";

const ProductItem = ({ product }) => {
  return (
    <div className="flex flex-col gap-3 w-full md:w-[20rem] border-b pb-3">
      <Image
        priority
        unoptimized
        loader={() => product.imageUrl}
        src={product.imageUrl}
        width={500}
        height={500}
        alt={product.title}
        className="w-auto h-[30rem] object-cover"
      />
      <span className="uppercase text-xs tracking-widest font-semibold">
        {product.category}
      </span>
      <h3 className="text-2xl font-ligh h-[4rem]">{product.title}</h3>
      <p className="text-gray-500 h-[5rem]">
        {product.description?.split(".")[0]}.
      </p>
      <div className="flex justify-between items-center">
        <p className="text-rose-500 font-medium">
          {formatCurrency(product.price)}
        </p>
        <Link
          href={`/products/${product.id}`}
          className="uppercase linear-walkaways"
        >
          Buy now
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;

import { formatCurrency } from "@/utils/formatCurrency";
import Image from "next/image";
import Link from "next/link";

const ProductItem = ({ product }) => {
  return (
    <div className="flex flex-col gap-3 w-96 border-b pb-3">
      <Image
        priority
        unoptimized
        loader={() => product.imageUrl}
        src={product.imageUrl}
        width={500}
        height={500}
        alt={product.title}
        className="w-auto h-auto"
      />
      <span className="uppercase text-xs tracking-widest font-semibold">
        {product.category}
      </span>
      <h3 className="text-2xl font-light">{product.title}</h3>
      <p className="text-gray-400">{product.description.split(".")[0]}.</p>
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

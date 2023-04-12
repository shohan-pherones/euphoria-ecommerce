import Image from "next/image";
import menImage from "../public/images/fashion-men.svg";
import womenImage from "../public/images/fashion-women.svg";
import Link from "next/link";

const Category = () => {
  return (
    <div className="category wrapper my-20 flex flex-col gap-10">
      <h2 className="section-title">Categories</h2>
      <div className="category-wrapper flex flex-col-2 gap-5">
        <Link href={"products/men"} className="sq-men">
          <div className="overlay"></div>
          <h3 className="category-title-men">
            <Image
              className="translate-x-14"
              priority
              src={menImage}
              height={40}
              width={40}
              alt="men-shadow"
            />
            <p>Men</p>
          </h3>
        </Link>
        <Link href={"products/women"} className="sq-women">
          <div className="overlay"></div>
          <h3 className="category-title-women">
            <Image
              className="translate-x-[6rem]"
              priority
              src={womenImage}
              height={78}
              width={78}
              alt="women-shadow"
            />
            <p>Women</p>
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default Category;

import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Category = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="category wrapper my-20 flex flex-col gap-10 overflow-x-hidden">
      <h2 className="section-title">Categories</h2>
      <div className="category-wrapper flex flex-col-2 gap-5">
        <Link
          href={"products/men"}
          className="sq-men"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="overlay"></div>
          <h3 className="category-title-men">
            <p>Men</p>
          </h3>
        </Link>
        <Link
          href={"products/women"}
          className="sq-women"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <div className="overlay"></div>
          <h3 className="category-title-women">
            <p>Women</p>
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default Category;

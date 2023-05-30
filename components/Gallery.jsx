import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import GridItemForGallery from "./GridItemForGallery";

const data = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/13565969/pexels-photo-13565969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Women tops",
    animStyle: "fade-right",
    animDuration: "800",
    animDelay: "250",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/10041282/pexels-photo-10041282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Women shirts",
    animStyle: "fade-right",
    animDuration: "800",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/769731/pexels-photo-769731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Men shirts",
    animStyle: "fade-down",
    animDuration: "800",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/2453823/pexels-photo-2453823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Men pants",
    animStyle: "fade-down",
    animDuration: "800",
    animDelay: "250",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/7473356/pexels-photo-7473356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Women pants",
    animStyle: "fade-up",
    animDuration: "800",
    animDelay: "500",
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/7848603/pexels-photo-7848603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Men shirts",
    animStyle: "fade-up",
    animDuration: "800",
    animDelay: "250",
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/1007018/pexels-photo-1007018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Women skirts",
    animStyle: "fade-up",
    animDuration: "800",
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/4637874/pexels-photo-4637874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Men shoes",
    animStyle: "fade-left",
    animDuration: "800",
  },
  {
    id: 9,
    src: "https://images.pexels.com/photos/5713302/pexels-photo-5713302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Women shoes",
    animStyle: "fade-left",
    animDuration: "800",
    animDelay: "250",
  },
  {
    id: 10,
    src: "https://images.pexels.com/photos/16131075/pexels-photo-16131075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Men jackets",
    animStyle: "fade-left",
    animDuration: "800",
    animDelay: "500",
  },
];

const Gallery = () => {
  return (
    <div className="wrapper image-container my-20 overflow-x-hidden">
      <div className="text-center mb-10 flex flex-col gap-5">
        <span className="font-medium tracking-widest">{`LET'S SEE`}</span>
        <span className="section-title">GALLERY OF THE EUPHORIA</span>
        <Link
          href="/products"
          className="self-center font-medium tracking-widest flex gap-2 items-center group"
        >
          SHOP NOW{" "}
          <span className="group-hover:translate-x-5 duration-300">
            <BsArrowRight />
          </span>
        </Link>
      </div>

      <div className="grid-container">
        {data.map((item) => (
          <GridItemForGallery key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;

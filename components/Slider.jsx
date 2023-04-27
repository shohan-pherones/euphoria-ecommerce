import { useCallback, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slide from "./Slide";

const data = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/2409681/pexels-photo-2409681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headline: "Unleash Your Style",
    body: "Shop the Latest Trends on Our Fashion Website & discover your fashion identity today! ",
    cta: "Browse our collections !",
    category: "",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headline: "Be a Fashion Icon",
    body: "Stay on Top of the Latest Mens Fashion Trends. Upgrade your wardrobe with our newest arrivals. Shop now and unleash your inner fashionista.",
    cta: "View Mens Collection !",
    category: "men",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/1500482/pexels-photo-1500482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headline: "Elegance Redefined",
    body: "Discover Timeless Fashion. Step into a world of sophistication and grace. Shop our classical women's fashion collection today.",
    cta: "Browse ladies collection !",
    category: "women",
  },
];

const Slider = () => {
  const [curSlide, setCurSlide] = useState(0);

  const goToPrev = useCallback(() => {
    setCurSlide(curSlide === 0 ? data.length - 1 : (prev) => prev - 1);
  }, [curSlide]);

  const goToNext = useCallback(() => {
    setCurSlide(curSlide === data.length - 1 ? 0 : (prev) => prev + 1);
  }, [curSlide]);

  return (
    <div className="frame relative overflow-x-hidden">
      <div
        className="slider"
        style={{
          transform: `translateX(-${100 * curSlide}vw)`,
          width: `${100 * data.length}vw`,
        }}
      >
        {data.map((image, index) => (
          <Slide key={index} image={image} />
        ))}
      </div>

      <div className="navigators bottom-10 sm:bottom-20">
        <button onClick={goToPrev} className="navigators-btn">
          <BsArrowLeft />
        </button>
        <button onClick={goToNext} className="navigators-btn">
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;

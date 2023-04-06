import { useCallback, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slide from "./Slide";

const data = [
  "https://images.pexels.com/photos/2409681/pexels-photo-2409681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1500482/pexels-photo-1500482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/906002/pexels-photo-906002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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

      <div className="navigators">
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

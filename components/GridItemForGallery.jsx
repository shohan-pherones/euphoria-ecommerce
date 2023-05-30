import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const GridItemForGallery = ({ item }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className={`item${item.id}`}
      data-aos={item.animStyle}
      data-aos-duration={item.animDuration}
      data-aos-delay={item.animDelay}
    >
      <Image
        priority
        unoptimized
        loader={() => item.src}
        src={item.src}
        width={50}
        height={50}
        alt={item.title}
        className="w-full h-full object-cover"
      />
      <span className="uppercase text-gray-500">{item.title}</span>
    </div>
  );
};

export default GridItemForGallery;

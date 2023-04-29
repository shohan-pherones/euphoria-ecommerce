import Link from "next/link";

const Slide = ({ image }) => {
  return (
    <div className="slide" style={{ backgroundImage: `url(${image.src})` }}>
      <div className="slide-text container mx-8 md:mx-10 xl:mx-20 flex flex-col items-start justify-center h-full gap-5 text-violet-50">
        <h1 className="text-4xl md:text-6xl lg:text-7xl  font-semibold uppercase space-font z-10">
          {image.headline}
        </h1>
        <p className="w-2/3 lg:w-1/2 z-20 text-sm md:text-base lg:text-lg xl:text-xl">
          {image.body}
        </p>
        <Link
          href={`products/${image.category}`}
          className="cta-btn border-[1px] uppercase h-12 w-64 md:h-14 md:w-72 mt-5 duration-300 font-medium"
        >
          <span className="absolute z-30 w-full text-center top-[30%] text-sm md:text-base">
            {image.cta}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Slide;

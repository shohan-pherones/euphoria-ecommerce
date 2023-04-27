import Link from "next/link";

const Slide = ({ image }) => {
  return (
    <div className="slide" style={{ backgroundImage: `url(${image.src})` }}>
      <div className="slide-text container mx-8 md:mx-10 xl:mx-20 flex flex-col items-start justify-center h-full gap-5 text-violet-50">
        <h1 className="text-5xl lg:text-6xl  font-semibold uppercase space-font z-10">
          {image.headline}
        </h1>
        <p className="w-2/3 lg:w-1/2 z-20 text-xl xl:text-2xl">{image.body}</p>
        <Link
          href={`products/${image.category}`}
          className="cta-btn border-2 uppercase h-12 w-72 mt-5 duration-300 font-medium"
        >
          <span className="absolute z-30 w-full text-center top-[25%] mb-36 sm:mb-0">
            {image.cta}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Slide;

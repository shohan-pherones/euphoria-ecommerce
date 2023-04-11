import Image from "next/image";

const LogoItemForAbout = ({ logo }) => {
  return (
    <div>
      <Image
        priority
        unoptimized
        loader={() => logo.src}
        src={logo.src}
        width={50}
        height={50}
        alt={logo.title}
        className="w-28 h-full object-cover p-5"
      />
    </div>
  );
};

export default LogoItemForAbout;

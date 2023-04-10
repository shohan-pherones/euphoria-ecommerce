import Image from "next/image";

const GridItemForGallery = ({ item }) => {
  return (
    <div className={`item${item.id}`}>
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

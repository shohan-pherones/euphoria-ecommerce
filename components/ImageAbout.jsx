import Image from "next/image";

export const ImageAbout = () => {
  return (
    <div className="py-10">
      <div className="flex gap-5">
        <div className="relative  w-1/2 h-96">
          <Image
            priority
            unoptimized
            loader={() =>
              "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            src={
              "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            width={50}
            height={50}
            alt={"image1"}
            className="w-96  object-cover"
          />

          <Image
            priority
            unoptimized
            loader={() =>
              "https://images.pexels.com/photos/1544222/pexels-photo-1544222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            src={
              "https://images.pexels.com/photos/1544222/pexels-photo-1544222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            width={50}
            height={50}
            alt={"image2"}
            className="absolute top-20 left-[300px] w-2/4"
          />
        </div>
        <div className="relative  w-1/2 h-96">
          <Image
            priority
            unoptimized
            loader={() =>
              "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            src={
              "https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            width={50}
            height={50}
            alt={"image3"}
            className="w-96  object-cover"
          />

          <Image
            priority
            unoptimized
            loader={() =>
              "https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            src={
              "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            width={50}
            height={50}
            alt={"image4"}
            className="absolute top-20 left-[300px] w-2/4"
          />
        </div>
      </div>
    </div>
  );
};

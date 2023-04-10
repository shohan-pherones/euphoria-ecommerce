import { useSelector } from "react-redux";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";

const Gallery = () => {
  const products = useSelector((state) => state.myShop.products);
  console.log(products);

  return (
    <div className="image-container">
      <div className="section-title text-center mb-20 flex flex-col gap-5 text-sm">
        <span className="">LET' SEE</span>
        <span className="">GALLERY OF THE EUPHORIA</span>
        <div className="flex justify-center items-center gap-2">
          <span className="">SHOP NOW</span>
          <AiOutlineArrowRight className="text-gray-200" />
        </div>
      </div>

      <div class="grid-container">
        <div class="item1">
          <Image
            priority
            unoptimized
            // loader={() => product.imageUrl}
            src="https://images.pexels.com/photos/13565969/pexels-photo-13565969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={500}
            height={500}
            // alt={product.title}
            className="w-full h-full object-cover"
          />
          <span>Women tops</span>
        </div>
        <div class="item2">
          <Image
            priority
            unoptimized
            // loader={() => product.imageUrl}
            src="https://images.pexels.com/photos/10041282/pexels-photo-10041282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={500}
            height={500}
            // alt={product.title}
            className="w-full h-full object-cover"
          />
          <span>Women shirt</span>
        </div>
        <div class="item3">
          <Image
            priority
            unoptimized
            // loader={() => product.imageUrl}
            src="https://images.pexels.com/photos/769731/pexels-photo-769731.jpeg?auto=compress&cs=tinysrgb&w=600"
            width={500}
            height={500}
            // alt={product.title}
            className="w-full h-full object-cover"
          />
          <span>Men shirt</span>
        </div>
        <div class="item4">
          <Image
            priority
            unoptimized
            // loader={() => product.imageUrl}
            src="https://images.pexels.com/photos/2453823/pexels-photo-2453823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={500}
            height={500}
            // alt={product.title}
            className="w-full h-full object-cover"
          />
          <span>Men pant</span>
        </div>
        <div class="item5">
          <Image
            priority
            unoptimized
            // loader={() => product.imageUrl}
            src="https://images.pexels.com/photos/7473356/pexels-photo-7473356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={500}
            height={500}
            // alt={product.title}
            className="w-full h-full object-cover"
          />
          <span>Women pant</span>
        </div>
        <div class="item6">
          <Image
            priority
            unoptimized
            // loader={() => product.imageUrl}
            src="https://images.pexels.com/photos/7848603/pexels-photo-7848603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={500}
            height={500}
            // alt={product.title}
            className="w-full h-full object-cover"
          />
          <span>Men shirt</span>
        </div>
        <div class="item7">
          <Image
            priority
            unoptimized
            // loader={() => product.imageUrl}
            src="https://images.pexels.com/photos/1007018/pexels-photo-1007018.jpeg?auto=compress&cs=tinysrgb&w=600"
            width={500}
            height={500}
            // alt={product.title}
            className="w-full h-full object-cover"
          />
          <span>Women skirt</span>
        </div>
        <div class="item8">
          <Image
            priority
            unoptimized
            // loader={() => product.imageUrl}
            src="https://images.pexels.com/photos/4637874/pexels-photo-4637874.jpeg?auto=compress&cs=tinysrgb&w=600"
            width={500}
            height={500}
            // alt={product.title}
            className="w-full h-full object-cover"
          />
          <span>Men shoe</span>
        </div>
        <div class="item9">
          <Image
            priority
            unoptimized
            // loader={() => product.imageUrl}
            src="https://images.pexels.com/photos/5713302/pexels-photo-5713302.jpeg?auto=compress&cs=tinysrgb&w=600"
            width={500}
            height={500}
            // alt={product.title}
            className="w-full h-full object-cover"
          />
          <span>Women shoe</span>
        </div>
        <div class="item10">
          <Image
            priority
            unoptimized
            // loader={() => product.imageUrl}
            src="https://images.pexels.com/photos/16131075/pexels-photo-16131075.jpeg?auto=compress&cs=tinysrgb&w=600"
            width={500}
            height={500}
            // alt={product.title}
            className="w-full h-full object-cover"
          />
          <span>Men jacket</span>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

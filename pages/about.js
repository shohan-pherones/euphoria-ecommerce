import Image from "next/image";
import Link from "next/link";

import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

const About = () => {
  const images = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "about page iamge",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "about page iamge",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "about page iamge",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "about page iamge",
    },
  ];

  const logos = [
    {
      id: 1,
      src: "https://cdn.shopify.com/s/files/1/0552/9632/7732/files/LK11_281de4ec-ac94-48b1-a8a4-4543aa069a02.png?v=1637221142",
      alt: "logo",
    },
    {
      id: 2,
      src: "https://w7.pngwing.com/pngs/126/505/png-transparent-emporio-armani-ar1808-fashion-watch-shop-armani-logo-text-logo-shoe-thumbnail.png",
      alt: "logo",
    },
    {
      id: 3,
      src: "https://img.freepik.com/free-vector/hand-drawn-clothing-store-logo-design_23-2149577874.jpg",
      alt: "logo",
    },
    {
      id: 4,
      src: "https://i.pinimg.com/originals/eb/a8/02/eba802876fdb502279d29ecf5df77fcf.png",
      alt: "logo",
    },
    {
      id: 5,
      src: "https://cdn.shopify.com/s/files/1/0552/9632/7732/files/LK11_281de4ec-ac94-48b1-a8a4-4543aa069a02.png?v=1637221142",
      alt: "logo",
    },
    {
      id: 6,
      src: "https://cdn.shopify.com/s/files/1/0552/9632/7732/files/LK11_281de4ec-ac94-48b1-a8a4-4543aa069a02.png?v=1637221142",
      alt: "logo",
    },
    {
      id: 6,
      src: "https://cdn.shopify.com/s/files/1/0552/9632/7732/files/LK11_281de4ec-ac94-48b1-a8a4-4543aa069a02.png?v=1637221142",
      alt: "logo",
    },
    {
      id: 6,
      src: "https://cdn.shopify.com/s/files/1/0552/9632/7732/files/LK11_281de4ec-ac94-48b1-a8a4-4543aa069a02.png?v=1637221142",
      alt: "logo",
    },
  ];

  return (
    <div className="container mx-auto">
      <div>
        <div className="">
          <h1 className="section-title text-center p-5">About Us</h1>

          <p className="text-sm leading-7 mb-6 text-center">
            We are a leading e-commerce website that offers a wide range of
            products and services to our customers. Our mission is to provide
            the best shopping experience to our customers with high-quality
            products, affordable prices, and excellent customer service.
          </p>

          <p className="text-sm leading-7 mb-6 text-center">
            We have a team of experienced professionals who work tirelessly to
            ensure that our customers are satisfied with their shopping
            experience. Our goal is to become the go-to e-commerce website for
            our customers.
          </p>
        </div>
        <div className="flex overflow-x-hidden">
          {images.map((image) => (
            <Image
              key={image.id}
              priority
              unoptimized
              src={image.src}
              alt={image.alt}
              width={500}
              height={500}
              className="h-auto object-cover p-3 cursor-pointer w-96"
            />
          ))}
        </div>
        <div className="flex py-24 gap-8">
          <div className="left w-1/2">
            <p className="text-4xl text-center">
              Our Website Provides you most Expensive Products
            </p>
          </div>
          <div className="right w-2/4 text-center">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              assumenda labore? Dolorum, ipsam velit. Sapiente praesentium eos
              dicta numquam fuga voluptatum hic soluta, id suscipit aspernatur
              dignissimos similique deserunt maxime.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center bg-black">
          <Image
            priority
            unoptimized
            src={
              "https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt={"banner"}
            width={500}
            height={500}
            className="h-[30rem] min-w-fit  object-contain p-3 cursor-pointer"
          />
          <Image
            priority
            unoptimized
            src={
              "https://images.pexels.com/photos/1006994/pexels-photo-1006994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt={"banner"}
            width={500}
            height={500}
            className="h-[30rem] min-w-fit object-contain p-3 cursor-pointer"
          />
        </div>
        <div>
          <p className="font-black text-2xl text-center p-3">Partners</p>

          <p className=" flex text-center text-4xl px-36 py-5">
            I,m very grateful for the opportunity to collaborate with such
            beautiful agencies and brands
          </p>

          <div className="grid grid-cols-4 justify-center items-center  p-20">
            {logos.map((logo) => (
              <div className="flex">
                <Image
                  key={logo.id}
                  priority
                  unoptimized
                  src={logo.src}
                  alt={logo.alt}
                  width={500}
                  height={500}
                  className="h-auto object-cover p-3 cursor-pointer  hover:bg-blue-300 w-40"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="text-lg leading-7 text-center p-5">
          Contact us at:
          <span className="text-blue-400 hover:underline cursor-pointer">
            info@example.com
          </span>
        </p>

        <div className="flex gap-10 justify-center items-center p-8">
          <Link href="https://www.google.com" target="blank">
            <BsFacebook />
          </Link>
          <Link href="https://www.google.com" target="blank">
            <BsTwitter />
          </Link>
          <Link href="https://www.google.com" target="blank">
            <BsLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;

import { ImageAbout } from "@/components/ImageAbout";
import LogoItemForAbout from "@/components/LogoItemForAbout";
import Image from "next/image";

const AboutPage = () => {
  const logos = [
    {
      id: 1,
      src: "https://static.vecteezy.com/system/resources/previews/001/192/065/original/circle-logo-turbine-png.png",
      title: "logo1",
    },
    {
      id: 2,
      src: "https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png",
      title: "logo2",
    },
    {
      id: 3,
      src: "https://www.shutterstock.com/image-vector/circle-leaf-transparent-png-shape-260nw-2156342163.jpg",
      title: "logo3",
    },
    {
      id: 4,
      src: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Logo_vector.png",
      title: "logo4",
    },
    {
      id: 5,
      src: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png",
      title: "logo5",
    },
    {
      id: 6,
      src: "https://img.freepik.com/vector-gratis/gradiente-ilustracion-pajaro-colorido_343694-1741.jpg",
      title: "logo6",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="header">
        <Image
          priority
          unoptimized
          loader={() =>
            "https://images.pexels.com/photos/10047607/pexels-photo-10047607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          src={
            "https://images.pexels.com/photos/10047607/pexels-photo-10047607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          width={50}
          height={25}
          alt={"background image"}
          className="w-full h-[48rem] object-cover"
        />

        <p className="text-center absolute top-1/2 left-96 uppercase font-thin text-white text-8xl">
          About Us
        </p>
      </div>

      <div className="wrapper">
        <div className="my-20 text-center">
          <p className="font-light uppercase text-xl p-5 text-black ">
            About euphoria Shopping
          </p>
          <p className="font-medium text-xl px-96 leading-loose pb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo placeat
            culpa totam sit dolorem a rerum quasi nam!
          </p>
          <p className="font-light text-base px-80 leading-normal pb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
            ut est quisquam, laboriosam, temporibus sed veniam error molestias
            ducimus esse alias nisi? Corporis eligendi est amet, provident sit
            laboriosam modi? Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Voluptatem ut est quisquam, laboriosam, temporibus sed veniam
            error molestias ducimus esse alias nisi? Corporis eligendi est amet,
            provident sit laboriosam modi?
          </p>
        </div>

        <div>
          <ImageAbout />
        </div>

        <div className="grid grid-cols-2 justify-center items-center p-20">
          <div className="left px-20 font-medium text-xl text-center leading-loose">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              dicta magnam fugiat ullam saepe accusamus quasi. Rerum facere
              laborum quos nulla.
            </p>
          </div>
          <div className="right px-20 font-light text-base text-center leading-normal pb-5">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
              magni facilis rerum corrupti eaque, perferendis voluptas ducimus
              nemo repudiandae quibusdam quam mollitia voluptatibus iure nostrum
              iste beatae neque, tempore hic, quidem architecto et molestiae!
              Magni perferendis eaque labore aspernatur tenetur dolorem magnam
              eius doloribus iure, saepe voluptatum iusto harum itaque.
            </p>
          </div>
        </div>
      </div>
      <div className="py-12">
        <Image
          priority
          unoptimized
          loader={() =>
            "https://www.ottografie.nl/wp-content/uploads/2018/06/mimoneda-nicole-meyer-otto-van-den-toorn-5-2000x1335.jpg"
          }
          src={
            "https://www.ottografie.nl/wp-content/uploads/2018/06/mimoneda-nicole-meyer-otto-van-den-toorn-5-2000x1335.jpg"
          }
          width={500}
          height={500}
          alt={"background image"}
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="wrapper py-10 flex flex-col gap-10">
        <p className="text-center font-bold text-2xl">Patners</p>

        <p className="text-center font-medium text-xl">
          We are very grateful for the opportunity to collaborate with such
          beautiful agencies and brands
        </p>

        <div className="p-10">
          <div className="grid grid-cols-3 mx-[30rem]">
            {logos.map((logo) => (
              <LogoItemForAbout key={logo.id} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

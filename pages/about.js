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
            "https://images.pexels.com/photos/242829/pexels-photo-242829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          src={
            "https://images.pexels.com/photos/242829/pexels-photo-242829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          width={50}
          height={25}
          alt={"Man Riding on Motorcycle"}
          className="w-full h-[48rem] object-cover brightness-50"
        />

        <p className="text-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] uppercase font-extralight text-white text-8xl">
          About Euphoria
        </p>
      </div>

      <div className="wrapper">
        <div className="my-20 text-center">
          <p className="tracking-widest font-semibold uppercase text-xl p-5 text-black">
            euphoria, the new era begins!
          </p>
          <p className="text-4xl px-[20rem] pb-5 font-extralight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo placeat
            culpa totam sit dolorem a rerum quasi nam!
          </p>
          <p className="px-[15rem] pb-5 text-xl font-light">
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

        <div className="grid grid-cols-2 justify-center items-start p-20">
          <div className="text-4xl px-[5rem] pb-5 font-extralight">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              dicta magnam fugiat ullam saepe accusamus quasi. Rerum facere
              laborum quos nulla.
            </p>
          </div>
          <div className="px-[5rem] pb-5 text-xl font-light">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              a quidem ipsa at iure ipsam accusantium in reiciendis voluptatem
              exercitationem, dicta quae optio repellendus voluptas nesciunt sit
              maiores non molestiae id corrupti distinctio maxime natus.
            </p>
          </div>
        </div>
      </div>
      <div className="py-12">
        <Image
          priority
          unoptimized
          loader={() =>
            "https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }
          src={
            "https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }
          width={500}
          height={500}
          alt={"Happy woman jumping with shopping bags"}
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="wrapper py-10 flex flex-col gap-10">
        <p className="tracking-widest font-semibold uppercase text-xl p-5 text-black text-center">
          Partners
        </p>

        <p className="text-4xl px-[5rem] pb-5 font-extralight text-center">
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

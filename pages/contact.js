import { useState } from "react";

import Image from "next/image";

const ContactPage = () => {
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold p-5 text-center">Contract Us</h2>
      <div className="container mx-auto flex justify-evenly">
        <div className=" flex w-1/2">
          <form className="w-full  p-8 rounded-lg">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="appearance-none border border-stone-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline-sky-400 focus:border-none"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="appearance-none border border-stone-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline-sky-400 focus:border-none"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 font-bold mb-2"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="appearance-none border border-stone-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline-sky-400 focus:border-none"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="appearance-none border border-stone-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline-sky-400 focus:border-none"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="right grid grid-cols-2 w-1/2 justify-between p-3">
          {images.map((image) => (
            <Image
              key={image.id}
              priority
              unoptimized
              src={image.src}
              alt={image.alt}
              width={500}
              height={500}
              className="w-auto h-auto object-cover p-3 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

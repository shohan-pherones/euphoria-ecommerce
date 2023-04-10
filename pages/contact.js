import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
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
      phone: "",
    });
  };

  return (
    <div className="my-20 wrapper min-h-screen">
      <h2 className="section-title">Contact Us</h2>
      <div className="flex gap-10 mt-10">
        <div className=" flex w-full">
          <form className="w-1/2 pr-8 py-5 rounded-lg">
            <div className="gap-3">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-light mb-2 uppercase"
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
                  className="appearance-none rounded w-full p-5 outline-none text-gray-700  border border-gray-300 focus:border-gray-600 duration-300"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-light mb-2 uppercase"
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
                  className="appearance-none rounded w-full p-5 outline-none text-gray-700  border border-gray-300 focus:border-gray-600 duration-300"
                />
              </div>

              {/* <div className="mb-4">
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
              </div> */}
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-light mb-2 uppercase"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="appearance-none rounded w-full p-5 outline-none text-gray-700  border border-gray-300 focus:border-gray-600 duration-300 resize-none h-40"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="bg-black hover:opacity-80 text-white py-5 px-10 uppercase duration-300"
              type="submit"
            >
              Submit
            </button>
          </form>
          <div className="left pl-8 py-8 gap-10 justify-between">
            <div className="px-8 py-2">
              <p className="font-normal">Return address for online orders:</p>
              <p className="font-light">
                Bohemian Traders 3 / 13 Bonnal Rd Erina, NSW, 2250
              </p>
            </div>
            <div className="px-8 py-2">
              <p className="font-normal uppercase">
                Return address for online orders:
              </p>
              <p className="font-light">
                Bohemian Traders 3 / 13 Bonnal Rd Erina, NSW, 2250
              </p>
            </div>
            <div className="px-8 py-2">
              <p className="font-normal uppercase">phone:</p>
              <a
                className="text-rose-500 font-light"
                href="tel: phoneNumber"
                target="blank"
              >
                +8801821732936
              </a>
            </div>
            <div className="px-8 py-2">
              <p className="font-normal uppercase">Email:</p>
              <a
                className="text-rose-500 font-light"
                href="mailto: abdullahalsayad03@gmail.com"
                target="blank"
              >
                <p>abdullahalsayad03@gmail.com</p>
              </a>
            </div>

            <div className="px-8 pt-8">
              <p className="font-normal uppercase">time:</p>
              <p className="font-light">Mon-Sat 9:00am - 5:00pm </p>
              <p className="font-light">Sun 10:00am - 4:00pm</p>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

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

      <div className="flex mt-10">
        <div className="flex flex-col lg:flex-row w-full gap-10">
          <form className="w-full flex-[1]">
            <div className="gap-3">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 mb-2 uppercase"
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
                  className="appearance-none w-full p-4 outline-none text-gray-700  border border-gray-300 focus:border-gray-600 duration-300"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 mb-2 uppercase"
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
                  className="appearance-none w-full p-4 outline-none text-gray-700  border border-gray-300 focus:border-gray-600 duration-300"
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 mb-2 uppercase"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="appearance-none w-full p-4 outline-none text-gray-700  border border-gray-300 focus:border-gray-600 duration-300 resize-none h-40"
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

          <div className="right flex flex-col gap-5 flex-[1]">
            <div>
              <p className="font-medium uppercase text-lg">
                Return address for online orders:
              </p>
              <p>1600 Pennsylvania Ave NW, Washington, DC 20500</p>
            </div>
            <div>
              <p className="font-medium uppercase text-lg">Phone Number:</p>
              <p className="text-rose-500 underline underline-offset-2">
                012-345-6789
              </p>
            </div>
            <div>
              <p className="font-medium uppercase text-lg">Email Adress:</p>
              <p className="text-rose-500 underline underline-offset-2">
                contact@euphoria.com
              </p>
            </div>
            <div>
              <p className="font-medium uppercase text-lg">Opening Hours:</p>
              <p>Mon-Sat: 10:00am - 8:00pm</p>
              <p>Sun: 11:00am - 9:00pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

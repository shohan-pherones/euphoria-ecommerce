import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";

const ContactPage = () => {
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
    const appTemplateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const appPublicId = process.env.NEXT_PUBLIC_USER_ID;

    emailjs
      .sendForm(serviceID, appTemplateId, formRef.current, appPublicId)
      .then(
        () => {
          toast.success("Message Sent!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        () => {
          toast.error("Something went wrong!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );

    //reset
    e.target.querySelector(".name").value = "";
    e.target.querySelector(".email").value = "";
    e.target.querySelector(".message").value = "";
  };

  return (
    <div className="my-20 wrapper min-h-screen">
      <h2 className="section-title">Contact Us</h2>

      <div className="flex mt-10">
        <div className="flex flex-col lg:flex-row w-full gap-10">
          <form onSubmit={sendEmail} className="w-full flex-[1]" ref={formRef}>
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
                  name="name"
                  placeholder="Write your name"
                  required
                  className="name appearance-none w-full p-4 outline-none text-gray-700  border border-gray-300 focus:border-gray-600 duration-300"
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
                  name="email"
                  placeholder="Write your email"
                  required
                  className="email appearance-none w-full p-4 outline-none text-gray-700  border border-gray-300 focus:border-gray-600 duration-300"
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
                name="message"
                placeholder="Write your message"
                required
                className="message appearance-none w-full p-4 outline-none text-gray-700  border border-gray-300 focus:border-gray-600 duration-300 resize-none h-40"
              />
            </div>
            <input
              required
              className="bg-black hover:opacity-80 text-white py-5 px-10 uppercase duration-300 cursor-pointer"
              type="submit"
              value="Submit"
            />
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

import Image from "next/image";

const About = () => {
  return (
    <div className="container mx-auto">
      <div>
        <h1 className="text-4xl mb-4 text-center">About Us</h1>

        <p className="text-lg leading-7 mb-6">
          We are a leading e-commerce website that offers a wide range of
          products and services to our customers. Our mission is to provide the
          best shopping experience to our customers with high-quality products,
          affordable prices, and excellent customer service.
        </p>

        <p className="text-lg leading-7 mb-6">
          We have a team of experienced professionals who work tirelessly to
          ensure that our customers are satisfied with their shopping
          experience. Our goal is to become the go-to e-commerce website for our
          customers.
        </p>

        <iframe
          className="w-full h-96 py-5"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14596.90107406525!2d90.3654296!3d23.84613325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7641177b69f%3A0xa0511723b61348df!2sclothing%20manufacturers%20in%20Bangladesh%20Rs%20f%26c!5e0!3m2!1sen!2sbd!4v1680948084180!5m2!1sen!2sbd"
        ></iframe>

        <p className="text-lg leading-7 text-center p-5">
          Contact us at: info@example.com
        </p>
      </div>
    </div>
  );
};

export default About;

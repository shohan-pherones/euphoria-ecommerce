import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-center text-white border-t bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        <div className="footer-col-1 flex flex-col">
          <Link href="/" className="text-6xl font-semibold my-16">
            euphoria.
          </Link>
        </div>
        <div className="footer-col-2">
          <p className="follow-text pt-16 text-lg">Don't forget to follow us</p>
          <div className="social-icons">
            <div className="icon-circle">
              <FaFacebookF className="text-rose-100 mx-auto" />
            </div>
            <div className="icon-circle">
              <FaInstagram className="text-rose-100 mx-auto" />
            </div>
            <div className="icon-circle">
              <FaLinkedinIn className="text-rose-100 mx-auto" />
            </div>
            <div className="icon-circle">
              <FaTwitter className="text-rose-100 mx-auto" />
            </div>
          </div>
        </div>
        <div className="footer-col-3  mt-10">
          <p className="font-semibold">Useful Links</p>
          <div className="nav-link flex flex-col-2 mt-4 gap-8 justify-center">
            <div className="link-col-left flex flex-col text-left">
              <Link href="/" className="footer-nav-links">
                Home
              </Link>
              <Link href="/products" className="footer-nav-links">
                Shop
              </Link>
              <Link href="/products/men" className="footer-nav-links">
                Men
              </Link>
              <Link href="/products/women" className="footer-nav-links">
                Women
              </Link>
            </div>
            <div className="link-col-right flex flex-col text-left">
              <Link href="/inventory" className="footer-nav-links">
                Inventory
              </Link>
              <Link href="/about" className="footer-nav-links">
                About
              </Link>
              <Link href="/contact" className="footer-nav-links">
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-col-4 mt-16">
          <p>Need more informations ?</p>
          <button className="footer-btn bg-rose-700 p-3 rounded-full uppercase text-sm font-medium hover:text-rose-500 hover:bg-white duration-200 my-3">
            + new message
          </button>
          <p className="font-semibold text-xl">contact@euphoria.com</p>
        </div>
      </div>

      <p className="copyright mt-14 pb-6">
        &copy; {new Date().getFullYear()} Euphoria. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-gray-300 bg-black py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-20 wrapper w-full gap-16 md:gap-10 lg:gap-5 xl:gap-10 2xl:px-20 ">
        <div className="footer-col-1 flex flex-col items-start">
          <Link
            href="/"
            className="text-4xl md:text-2xl font-semibold text-rose-500 hover:text-white duration-300"
          >
            euphoria.
          </Link>
        </div>
        <div className="footer-col-2 flex flex-col items-start">
          <p className="follow-text uppercase tracking-wider text-gray-400">{`Don't forget to follow us`}</p>
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
        <div className="footer-col-3 flex flex-col items-start">
          <p className="uppercase font-medium text-rose-500 tracking-wider">
            Useful Links
          </p>
          <div className="nav-link flex flex-col-2 mt-3 gap-10 justify-start">
            <div className="link-col-left flex flex-col text-left gap-1 uppercase">
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
            <div className="link-col-right flex flex-col text-left gap-1 uppercase">
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
        <div className="footer-col-4 flex flex-col items-start xl:items-center gap-3">
          <p className="uppercase tracking-wider text-gray-400">
            Need more informations?
          </p>
          <button className="footer-btn bg-rose-700 py-4 px-6 rounded-full uppercase text-sm font-medium hover:text-rose-500 hover:bg-rose-50 duration-300">
            + New Message
          </button>
          <p className="font-medium text-lg">contact@euphoria.com</p>
        </div>
      </div>

      <p className="copyright border-t border-gray-500/40 pt-20 text-gray-400 wrapper text-center uppercase">
        &copy; {new Date().getFullYear()} Euphoria. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

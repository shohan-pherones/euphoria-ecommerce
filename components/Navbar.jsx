import Link from "next/link";
import { BsBag, BsHeart } from "react-icons/bs";

const Navbar = () => {
  return (
    <header className="wrapper flex justify-between items-center h-20">
      <div className="logo">
        <Link href="/" className="text-2xl font-semibold">
          euphoria.
        </Link>
      </div>

      <nav className="nav-links">
        <ul className="flex gap-5 uppercase">
          <li>
            <Link href="/" className="linear-walkaways">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="linear-walkaways">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/inventory" className="linear-walkaways">
              Inventory
            </Link>
          </li>
          <li>
            <Link href="/about" className="linear-walkaways">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="linear-walkaways">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className="nav-btns flex gap-5">
        <button className="uppercase linear-walkaways">Sign in</button>
        <button className="relative">
          <span>
            <BsBag />
          </span>
          <span className="counting-bubble">5</span>
        </button>
        <button className="relative">
          <BsHeart />
          <span className="counting-bubble">5</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;

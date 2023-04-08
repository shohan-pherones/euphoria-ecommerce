import Link from "next/link";
import { useState } from "react";
import { BsBag } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { products } = useSelector((state) => state.products);
  const [toggleOpen, setToggleOpen] = useState(false);

  return (
    <header className="wrapper h-20 flex flex-wrap items-center justify-between md:mx-auto max-w-full ">
      <div className="logo">
        <Link href="/" className="text-2xl font-semibold">
          euphoria.
        </Link>
      </div>

      <FiMenu
        className="block text-2xl md:hidden cursor-pointer"
        onClick={() => setToggleOpen(!toggleOpen)}
      />

      <nav
        className={`${
          toggleOpen ? "block" : "hidden"
        } nav-links md:items-center md:w-auto md:block`}
      >
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
            <Link href="/products/men" className="linear-walkaways">
              Men
            </Link>
          </li>
          <li>
            <Link href="/products/women" className="linear-walkaways">
              Women
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

      <div className="nav-links-right flex gap-5">
        <Link href="/login" className="uppercase linear-walkaways">
          Sign in
        </Link>
        <Link href="/cart" className="relative">
          <span>
            <BsBag />
          </span>
          <span className="counting-bubble">{products.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;

import { BsChevronDown, BsChevronUp, BsXLg } from "react-icons/bs";
import Link from "next/link";
const data = [
  {
    id: 1,
    name: "Slim Fit Oxford Shirt",
    image: "https://cdn.storeshark.pk/store/1/products/images/173014251.jpg",
    description:
      "Made with 100% premium cotton, this classic oxford shirt features a stylish slim fit that's perfect for any occasion",
    price: "$49.99",
  },
  {
    id: 2,
    name: "Slim Fit Oxford Shirt",
    image: "https://cdn.storeshark.pk/store/1/products/images/173014251.jpg",
    description:
      "Made with 100% premium cotton, this classic oxford shirt features a stylish slim fit that's perfect for any occasion",
    price: "$49.99",
  },
];

const CartPage = () => {
  return (
    <div className="cart-section container mx-auto py-5 min-h-screen">
      <h2 className="section-title uppercase font-bold text-base mb-5 space-font">
        {data.length > 0
          ? `Your cart (${data.length} item${data.length > 1 ? "s" : ""})`
          : "Your cart is empty"}
      </h2>
      {/* {data.length === 0 && (
        <div className="bg-violet-700 text-violet-100 flex justify-center items-center w-40 mx-auto py-2 border border-rose-500 capitalize font-semibold active:bg-orange-700 active:text-orange-100 duration-300">
          <Link href="/">shopping now</Link>
        </div>
      )} */}

      {data.length > 0 && (
        <>
          <div className="container">
            <div className="product-headlines grid grid-cols-5 gap-10 border-b pb-2">
              <div className="col-product col-span-2">Item</div>
              <div className="col-unit-price">Price</div>
              <div className="col-quantity">Quantity</div>
              <div className="col-total-price ml-auto">Total</div>
            </div>
            <div className="products flex flex-col">
              {data.map((product) => (
                <div
                  key={product.id}
                  className="product grid grid-cols-5 gap-10 border-b-2 pb-5 mt-5"
                >
                  <div className="left flex col-span-2 gap-5">
                    <img
                      className="w-24 h-24 object-cover"
                      src={product.image}
                      alt={product.name}
                    />

                    <div className="details flex flex-col items-start gap-3">
                      <span>{product.name}</span>
                      <button className="text-gray-400 hover:text-rose-500 duration-500">
                        remove
                      </button>
                    </div>
                  </div>
                  <div className="unit-price">{100}</div>
                  <div
                    className="counter
              flex"
                  >
                    <button className="w-10 h-10 bg-gray-100 border border-gray-300 flex justify-center items-center active:bg-gray-700 active:text-gray-50 font-semibold">
                      <BsChevronDown />
                    </button>
                    <span className="w-10 h-10 bg-gray-100 border border-gray-300 flex justify-center items-center">
                      {100}
                    </span>
                    <button className="w-10 h-10 bg-gray-100 border border-gray-300 flex justify-center items-center active:bg-gray-700 active:text-gray-50 font-semibold">
                      <BsChevronUp />
                    </button>
                  </div>
                  <div className="total-price ml-auto flex justify-items-start items-start">
                    <div className="flex justify-center items-center gap-2">
                      <span>{100}</span>
                      <span className="hover:cursor-pointer duration-300">
                        <BsXLg />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cart-lower flex justify-between items-start py-10">
            <div className="flex justify-center items-center gap-10">
              <button className="clear-cart uppercase border py-2 px-4 hover:bg-red-300 hover:text-rose-600 hover:border-red-300 duration-500 font-medium rounded-sm">
                clear cart
              </button>
              <button className="clear-cart uppercase border py-2 px-4 hover:bg-sky-300 hover:text-sky-600 hover:border-sky-300 duration-500 font-medium rounded-sm">
                continue shopping
              </button>
            </div>
            <div className="flex flex-col items-start gap-2">
              <div className="top flex justify-between items-center w-full text-xl font-medium">
                <span className="text-sky-500 text-lg">SUBTOTAL</span>
                <span className=" text-rose-500">{100}</span>
              </div>
              <p className="">Carrying cost is calculated at the checkout</p>
              <Link
                href=""
                className="checkout bg-slate-500 w-full py-3 uppercase font-medium text-sky-50 tracking-widest hover:bg-sky-600 duration-500 text-center"
              >
                proceed to checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;

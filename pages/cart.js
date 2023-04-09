import CartItem from "@/components/CartItem";
import { formatCurrency } from "@/utils/formatCurrency";
import Link from "next/link";
import { useSelector } from "react-redux";

const CartPage = () => {
  const products = useSelector((state) => state.myShop.products);

  return (
    <div className="cart-section wrapper my-20 min-h-screen">
      <h2 className="section-title mb-10">
        {products.length > 0
          ? `Your cart (${products.length} item${
              products.length > 1 ? "s" : ""
            })`
          : "Your cart is empty"}
      </h2>

      {products.length > 0 && (
        <>
          <div className="cart-items-wrapper">
            <div className="product-headlines grid grid-cols-5 gap-10 border-b pb-2 uppercase font-light">
              <div className="col-product col-span-2">Item</div>
              <div className="col-unit-price">Unit Price</div>
              <div className="col-quantity">Quantity</div>
              <div className="col-total-price ml-auto">Total</div>
            </div>

            <div className="products flex flex-col">
              {products?.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </div>
          </div>

          <div className="cart-lower flex justify-between items-start my-10">
            <div className="flex justify-center items-center gap-10">
              <button className="clear-cart uppercase border py-3 px-5 hover:bg-rose-500 hover:text-rose-50 hover:border-rose-500 duration-300">
                Clear Cart
              </button>
              <button className="clear-cart uppercase border py-3 px-5 hover:bg-cyan-500 hover:text-cyan-50 hover:border-cyan-500 duration-300">
                Continue Shopping
              </button>
            </div>

            <div className="flex flex-col items-start gap-3">
              <div className="top flex justify-between items-center w-full text-xl font-medium border-b">
                <span>SUBTOTAL</span>
                <span>{formatCurrency(100)}</span>
              </div>
              <p className="text-gray-400">
                Shipping cost will calculate at the checkout.
              </p>
              <Link
                href=""
                className="checkout bg-cyan-500 w-full py-3 uppercase font-medium text-cyan-50 tracking-widest hover:bg-cyan-600 duration-300 text-center"
              >
                Proceed to checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;

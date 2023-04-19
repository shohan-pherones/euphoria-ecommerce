import Link from "next/link";
import { formatCurrency } from "@/utils/formatCurrency";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "@/components/CartItem";
import { clearCart } from "@/store/productSlice";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const CartPage = () => {
  const products = useSelector((state) => state.myShop.products);
  const dispatch = useDispatch();

  /* STRIPE PROMISE */
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );

  /* CHECKOUT HANDLER */
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    /* SENDING POST REQ. TO CREATE A CHECKOUT SESSION */
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: products,
    });

    if (checkoutSession) {
      console.log(checkoutSession);
    }

    /*  DISPATCHING THE CLEAR CART FUNCTION */
    dispatch(clearCart());

    /* REDIRECTING */
    const result = await stripe?.redirectToCheckout({
      sessionId: checkoutSession?.data?.id,
    });

    if (result?.error) {
      alert(result?.error.message);
    }
  };

  /* SUBTOTAL CALCULATION */
  const total = () => {
    const calcTotal = products.reduce(
      (acc, item) => (acc += item.quantity * item.price),
      0
    );
    const fixedTotal = +calcTotal.toFixed(2);
    const subtotal = formatCurrency(fixedTotal);
    return subtotal;
  };

  return (
    <div className="cart-section wrapper my-20 min-h-screen max-[425px]:my-10 max-[425px]:text-[12px] max-[768px]:text-sm max-[1024px]:text-base max-[1024px]:px-5">
      <h2 className="section-title mb-10 max-[425px]:text-center max-[425px]:text-2xl max-[425px]:mb-5 max-[1024px]:text-3xl">
        {products.length > 0
          ? `Your cart (${products.length} item${
              products.length > 1 ? "s" : ""
            })`
          : "Your cart is empty"}
      </h2>

      {products.length < 1 && (
        <Link
          href="/products"
          className="clear-cart uppercase border py-3 px-5 hover:bg-cyan-500 hover:text-cyan-50 hover:border-cyan-500 duration-300 "
        >
          Continue Shopping
        </Link>
      )}

      {products.length > 0 && (
        <>
          <div className="cart-items-wrapper">
            <div className="product-headlines grid grid-cols-5 gap-10 border-b pb-2 uppercase font-light">
              <div className="col-product col-span-2">Item</div>
              <div className="col-unit-price text-center">Unit Price</div>
              <div className="col-quantity text-center">Quantity</div>
              <div className="col-total-price ml-auto">Total</div>
            </div>

            <div className="products flex flex-col">
              {products?.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </div>
          </div>

          <div className="cart-lower flex justify-between items-start my-10 max-[425px]:my-5 max-[425px]:gap-5">
            <div className="flex justify-center items-center gap-5 max-[425px]:flex-col max-[425px]:w-full">
              <button
                onClick={() => dispatch(clearCart())}
                className="clear-cart uppercase border p-3 hover:bg-rose-500 hover:text-rose-50 hover:border-rose-500 duration-300 max-[425px]:w-full"
              >
                Clear Cart
              </button>
              <Link
                href="/products"
                className="clear-cart uppercase border p-3 hover:bg-cyan-500 hover:text-cyan-50 hover:border-cyan-500 duration-300 max-[425px]:w-full"
              >
                Continue Shopping
              </Link>
            </div>

            <div className="flex flex-col items-start gap-5 max-[425px]:w-full">
              <div className="top flex justify-between items-center w-full text-xl font-medium border-b max-[425px]:text-[12px]">
                <span className="uppercase">Subtotal</span>
                <span>{total()}</span>
              </div>
              <p className="text-gray-400  max-[425px]:hidden">
                Shipping cost will calculate at the checkout.
              </p>

              {/* CHECKOUT BUTTON */}
              <button
                onClick={handleCheckout}
                className="checkout bg-cyan-500 w-full py-5 uppercase font-medium text-cyan-50 tracking-widest hover:bg-cyan-600 duration-300 text-center"
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;

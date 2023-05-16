import { clearCart } from "@/store/productSlice";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";

const Success = ({ session }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSuccess = () => {
    router.push("/orders");
    dispatch(clearCart());
  };

  useEffect(() => {
    if (!session) {
      router.replace("/user/login");
    }
  }, [session, router]);

  if (!session) {
    return null;
  }

  if (session) {
    return (
      <div className="min-h-screen wrapper my-20 flex justify-center">
        <div className="text-center w-full lg:w-[50rem] flex flex-col items-center">
          <div className="flex justify-center items-center gap-2  text-2xl lg:text-3xl">
            <span className="text-green-500">
              <AiFillCheckCircle />
            </span>
            <h2>Your order has been confirmed!</h2>
          </div>
          <p className="my-3">
            Thank you for shopping with us. We will send a confirmation once
            your item has shipped. If you would like to check the status of your
            order(s), please visit the link below.
          </p>
          <button
            onClick={handleSuccess}
            className="bg-gray-900 text-white h-12 w-full lg:w-72 hover:opacity-80 duration-300 flex items-center justify-center gap-2 font-medium uppercase"
          >
            Go to your order
          </button>
        </div>
      </div>
    );
  }
};

export default Success;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/user/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

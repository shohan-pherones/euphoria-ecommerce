import { useRouter } from "next/router";
import { AiFillCheckCircle } from "react-icons/ai";

const Success = () => {
  const router = useRouter();

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
          Thank you for shopping with us. We will send a confirmation once your
          item has shipped. If you would like to check the status of your
          order(s), please visit the link below.
        </p>
        <button
          onClick={() => router.push("/orders")}
          className="bg-gray-900 text-white h-12 w-full lg:w-72 hover:opacity-80 duration-300 flex items-center justify-center gap-2 font-medium uppercase"
        >
          Go to your order
        </button>
      </div>
    </div>
  );
};

export default Success;

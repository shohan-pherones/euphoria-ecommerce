import Link from "next/link";

const login = () => {
  return (
    <div>
      <form className="login-form min-h-screen flex flex-col gap-5 pt-14 mx-auto max-w-lg  px-10 md:px-0">
        <h2 className="text-4xl font-light text-black mb-5 uppercase">
          Register
        </h2>

        <div className="form-control flex flex-col gap-2">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your e-mail address"
            className="bg-transparent border border-gray-500 py-[0.85rem] px-5 outline-none focus:border-cyan-500 duration-300"
          />
        </div>

        <div className="form-control flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="bg-transparent border border-gray-500 py-[0.85rem] px-5 outline-none focus:border-cyan-500 duration-300"
          />
        </div>

        <button
          type="submit"
          className="border text-md py-3 bg-cyan-500 text-center text-white font-medium hover:bg-cyan-600 duration-300 uppercase w-full tracking-widest md:text-xs lg:text-[14px] lg:py-5 max-[425px]:w-full"
        >
          Register
        </button>
        <div>
          <span className="mb-2">Already registered? </span>
          <Link href="../user/login" className="font-semibold  hover:underline">
            Log in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default login;

import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";

const LoginPage = ({ session }) => {
  const router = useRouter();

  const loginWithGoogle = async () => {
    try {
      await signIn("google");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (session) {
      router.replace("/user/profile");
    }
  }, [session, router]);

  if (session) {
    return null;
  }

  if (!session) {
    return (
      <div className="min-h-screen my-20 flex flex-col gap-5 items-center">
        <h2 className="section-title">You are not signed in.</h2>
        <button
          onClick={loginWithGoogle}
          className="bg-gray-900 text-white h-12 w-72 hover:opacity-80 duration-300 flex items-center justify-center gap-2 font-medium uppercase"
        >
          <span>
            <FcGoogle />
          </span>{" "}
          Sign in with Google
        </button>
      </div>
    );
  }
};

export default LoginPage;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/user/profile",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

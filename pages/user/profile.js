import { signOut, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Image from "next/image";
import { FiLogOut } from "react-icons/fi";

const ProfilePage = ({ session }) => {
  const router = useRouter();

  const logoutWithGoogle = async () => {
    try {
      await signOut("google");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (!session) {
      router.replace("/user/login");
    }
  }, [session, router]);

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen my-20 flex flex-col gap-5 items-center">
      <Image
        src={session.user.image}
        width={50}
        height={50}
        alt={session.user.name}
        className="h-20 w-20 rounded-full border-2 border-gray-900"
      />
      <h2 className="section-title">Welcome, {session.user.name}!</h2>
      <button
        onClick={logoutWithGoogle}
        className="bg-gray-900 text-white h-12 w-72 hover:opacity-80 duration-300 flex items-center justify-center gap-2 font-medium uppercase"
      >
        <span>
          <FiLogOut />
        </span>{" "}
        Sign out
      </button>
    </div>
  );
};

export default ProfilePage;

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

import Link from "next/link";

const user = {
  name: "John Doe",
  job: "Front-End-Developer",
  email: "abc@react.dev",
  phone: "+880-01711-101010",
  address: {
    village: "Dupchachia",
    upzila: "Dupchachia",
    district: "Bogura",
  },
  photo:
    "https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

const ProfilePage = () => {
  return (
    <>
      <div className="profile wrapper flex gap-10 justify-center pt-20">
        <div className="profile-cart-left border w-1/4 h-[15rem] flex flex-col justify-start items-center gap-3 rounded-sm shadow-sm hover:shadow-lg hover:cursor-pointer duration-300">
          <div className="user-img w-[100px] h-[100px] mt-5 rounded-full">
            <img
              src={user?.photo}
              alt={user?.name}
              className="w-full object-cover rounded-full"
            />
          </div>
          <h3>{user?.name}</h3>
          <h3>{user?.job}</h3>
        </div>
        <div className="profile-cart-right w-3/6 h-[15rem] flex flex-col justify-between shadow-md">
          <div className="flex items-center py-4 px-2 gap-5">
            <span>Full Name :</span> <span>{user?.name}</span>
          </div>
          <hr />
          <div className="flex items-center py-4 px-2 gap-5">
            <span>Email :</span> <span>{user?.email}</span>
          </div>
          <hr />
          <div className="flex items-center py-4 px-2 gap-5">
            <span>Phone :</span> <span>{user?.phone}</span>
          </div>
          <hr />
          <div className="flex items-center py-4 px-2 gap-5">
            <span>Address :</span>
            <span>
              {user?.address?.village}, {user?.address?.upzila},
              {user?.address?.district}
            </span>
          </div>
          <hr />
        </div>
      </div>
      <div className="btns w-[75%] mx-auto my-20 grid grid-cols-3 gap-5 text-center">
        <Link
          href="/inventory"
          className="border text-md py-3 bg-cyan-500 text-center text-white font-medium hover:bg-cyan-600 duration-300 uppercase"
        >
          Go to inventory
        </Link>
        <Link
          href="logout"
          className="border text-md py-3 bg-rose-500 text-center text-white font-medium hover:bg-rose-600 duration-300 uppercase"
        >
          Logout
        </Link>
        <Link
          href="/cart"
          className="border text-md py-3 bg-cyan-500 text-center text-white font-medium hover:bg-cyan-600 duration-300 uppercase"
        >
          View your order statistics
        </Link>
      </div>
    </>
  );
};

export default ProfilePage;

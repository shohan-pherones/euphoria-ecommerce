import prisma from "@/prisma/prisma";
import { formatCurrency } from "@/utils/formatCurrency";
import { format } from "date-fns";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Orders = ({ session, customer }) => {
  const router = useRouter();

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
      <div className="wrapper min-h-screen my-20">
        <h2 className="section-title">
          Your order{customer.length > 1 ? "s" : ""}: {customer.orders.length}
        </h2>

        <table className="w-full mt-20 text-left">
          <thead>
            <tr className="uppercase border-b">
              <th>Order ID</th>
              <th>Amount</th>
              <th>Shipping Cost</th>
              <th>Subtotal</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {customer.orders.map((order) => (
              <tr
                key={order.id}
                className="border-b hover:bg-gray-100 duration-300"
              >
                <td className="py-3">{order.id}</td>
                <td className="py-3">{formatCurrency(order.amountTotal)}</td>
                <td className="py-3">{formatCurrency(order.amountShipping)}</td>
                <td className="py-3">
                  {formatCurrency(order.amountShipping + order.amountTotal)}
                </td>
                <td className="py-3">
                  {format(new Date(order.createdAt), "dd/MM/yyyy")}
                </td>
                <td className="py-3">{order?.status?.toUpperCase()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default Orders;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  const customer = await prisma.user.findUnique({
    where: {
      email: session?.user?.email,
    },
    include: {
      orders: true,
    },
  });

  const updatedCustomer = {
    ...customer,
    updatedAt: customer.updatedAt.toString(),
    createdAt: customer.createdAt.toString(),
    orders: customer.orders.map((order) => ({
      ...order,
      updatedAt: order.updatedAt.toString(),
      createdAt: order.createdAt.toString(),
    })),
  };

  if (!session) {
    return {
      redirect: {
        destination: "/user/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session, customer: updatedCustomer },
  };
};

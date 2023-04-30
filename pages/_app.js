import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store, persistor } from "@/store";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps, session }) {
  return (
    <>
      <Head>
        <title>Euphoria - Shop Trendy and Affordable Clothing Online</title>
        <meta
          name="description"
          content="Euphoria is your destination for affordable and fashionable clothing online. Browse our collection of trendy women's and men's clothing today!"
        />
        <meta
          name="keywords"
          content="Euphoria, clothing, fashion, online shopping, women's clothing, men's clothing"
        />
      </Head>

      <SessionProvider session={session}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ToastContainer />
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </PersistGate>
        </Provider>
      </SessionProvider>
    </>
  );
}

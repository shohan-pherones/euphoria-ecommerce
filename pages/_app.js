import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store, persistor } from "@/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }) {
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
        <meta name="author" content="Euphoria Clothing Co." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.euphoria.com/" />
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </PersistGate>
      </Provider>
    </>
  );
}

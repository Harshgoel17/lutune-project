import "@/styles/globals.css";
import Head from "next/head";
import Wrapper from "@/components/Wrapper";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <div className=" relative">
      <Head>
        <title>All in One Place | TWJ</title>
      </Head>
      {/* <Blobs /> */}
      <Wrapper>
        <Header />
        <Component {...pageProps} />
      </Wrapper>
      <Footer />
    </div>
  );
}

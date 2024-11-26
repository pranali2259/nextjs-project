import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextPageWithLayout } from "next";
import Navbar1 from "@/component/Navbar/Navbar1";  
import Footer from "@/component/Footer/Footer";
 
export default function App({ Component, pageProps }: AppProps) {
  
  const getLayout = (Component as NextPageWithLayout).getLayout;

  if (getLayout) {
    
    return getLayout(<Component {...pageProps} />);
  }

   
  return (
    <>
      <Navbar1 />
      <main>
        <Component {...pageProps} /> 
      </main>
      <Footer/>
    </>
  );
}

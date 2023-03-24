import type { AppProps } from "next/app";
import "../styles/globals.scss";

import Navbar from "../components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>

      <Navbar />

        <main className="mx-auto max-w-3xl px-4 sm:px-6 bg-amber-50 xl:max-w-5xl xl:px-0">  
        <div className="mb-auto"><Component {...pageProps} /></div></main>



    
    </>
  );
}

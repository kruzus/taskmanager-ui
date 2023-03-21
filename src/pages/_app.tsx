import type { AppProps } from "next/app";
import "../styles/globals.scss";

import Navbar from "../components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-8 py-8 bg-base-200 rounded-md">
        <Component {...pageProps} />
      </main>
    </>
  );
}

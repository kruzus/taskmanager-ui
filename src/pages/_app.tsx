import type { AppProps } from "next/app";
import "../styles/globals.scss";

import Navbar from "../components/Navbar";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
<<<<<<< HEAD
         <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Task Manager - The perfect tool to manage your tasks and improve your productivity. Create, organize and complete your tasks easily." />
        <meta name="keywords" content="task manager, productivity, create tasks, complete tasks, organize tasks" />
        <meta name="author" content="kruzus" />
        <title>Task Manager - Manage Your Tasks</title>
      </Head>
=======

>>>>>>> 1e4d4ca74859575033c3a71c16e529a4982cf6e1
      <Navbar />

        <main className="mx-auto max-w-3xl px-4 sm:px-6 bg-amber-50 xl:max-w-5xl xl:px-0">  
        <div className="mb-auto"><Component {...pageProps} /></div></main>



    
    </>
  );
}

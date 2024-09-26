import "@/styles/globals.css";
import Script from "next/script";
import {useState,useEffect} from 'react'
import { DefaultSeo } from "next-seo";
import SEO from "./../../next-seo.config";
import Layout from "../components/layout";
import Preloader from "@/components/Preloader";

export const metadata = {
  title: "ArunRaj",
  description: "ArunRaj Online Services",
};



export default function App({ Component, pageProps }) {
  
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative ">
      {loading ? (
        <Preloader />
      ) : (
        <Layout>
          <Script
            src="https://static.elfsight.com/platform/platform.js"
            async
          ></Script>
          <Component {...pageProps} />
        </Layout>
      )}
      <DefaultSeo {...SEO} />
    </div>
  );
}
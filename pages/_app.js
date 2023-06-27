import ResultContextProvider from "../components/result";
import Layout from "../layouts/Layout";
import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
    <ResultContextProvider>
        <Head>
        <title>Axle Load Calculation</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon/alec.svg" />
        </Head>
      <Component {...pageProps} />
    </ResultContextProvider>
    </Layout>
  );
}
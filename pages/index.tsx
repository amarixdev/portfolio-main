/* eslint-disable @next/next/no-page-custom-font */
import { NextPage } from "next";
import { useMediaQuery } from "../util/hooks";
import MobileLayout from "../components/layout/MobileLayout";
import DesktopLayout from "../components/layout/DesktopLayout";
import Head from "next/head";

const Home: NextPage = () => {
  const isBreakPoint = useMediaQuery(1023);
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Yesteryear&display=swap"
          rel="stylesheet"
        />
        <title>Amari DeVaughn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isBreakPoint ? <MobileLayout /> : <DesktopLayout />}
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default Home;

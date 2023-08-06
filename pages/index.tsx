import { NextPage } from "next";
import { useMediaQuery } from "../util/hooks";
import MobileLayout from "../components/layout/mobile/MobileLayout";
import DesktopLayout from "../components/layout/desktop/DesktopLayout";
import Head from "next/head";

const Home: NextPage = () => {
  const isBreakPoint = useMediaQuery(1023);
  return (
    <>
      <Head>
        <title>Amari DeVaughn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isBreakPoint ? <MobileLayout /> : <DesktopLayout />}
    </>
  );
};

export default Home;

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/chakra/theme";
import React from "react";
import MyDrawer from "../components/Reddit/AwardMobile";

function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window === "undefined") React.useLayoutEffect = () => {};

  return (
    <ChakraProvider theme={theme}>
      {/* <div className={` fixed w-full bg-red-500 h-20 z-[999] `}></div> */}

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

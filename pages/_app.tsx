import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/chakra/theme";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window === "undefined") React.useLayoutEffect = () => {};

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

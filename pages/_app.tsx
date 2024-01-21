import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import React from "react";
import { ForceDarkMode, theme } from "../styles/chakra/theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window === "undefined") React.useLayoutEffect = () => {};

  return (
    <ChakraProvider theme={theme}>
      <ForceDarkMode>
        <Component {...pageProps} />
      </ForceDarkMode>
    </ChakraProvider>
  );
}

export default MyApp;

import { ChakraProvider } from "@chakra-ui/react";
import { appWithTranslation } from "next-i18next";
import Layout from "../components/Layout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);

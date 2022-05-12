import { Box } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import Hero from "../components/Hero";
import OurServices from "../components/OurServices";
import AboutUs from "../components/AboutUs";
import HomeNews from "../components/HomeNews";
import Manateam from "../components/ManaTeam";
import Career from "../components/Career";
import styles from "../styles/Home.module.css";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  const { t } = useTranslation("common");
  console.log(t(), t("key"));
  return (
    <>
      <Hero />
      {t("key")}
      <Box p={{ md: 32, base: 6 }}>
        <AboutUs />
      </Box>
      <Box p={{ md: 32, base: 6 }}>
        <OurServices />
      </Box>
      <Box px={{ md: 32, base: 6 }}>
        <HomeNews />
      </Box>
      <Box px={{ md: 32, base: 6 }}>
        <Manateam />
      </Box>
      <Box px={{ md: 32, base: 6 }}>
        <Career />
      </Box>
      <Box py={{ md: 20, base: 6 }} />
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

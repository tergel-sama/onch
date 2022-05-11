import { Box } from "@chakra-ui/react";
import Hero from "../components/Hero";
import OurServices from "../components/OurServices";
import AboutUs from "../components/AboutUs";
import HomeNews from "../components/HomeNews";
import Manateam from "../components/ManaTeam";
import Career from "../components/Career";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Hero />
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

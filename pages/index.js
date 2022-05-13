import { Box, Button } from "@chakra-ui/react";

import Hero from "../components/Hero";
import OurServices from "../components/OurServices";
import AboutUs from "../components/AboutUs";
import HomeNews from "../components/HomeNews";
import Manateam from "../components/ManaTeam";
import Career from "../components/Career";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="bg-white max-w-[1920px] overflow-hidden m-auto">
        <section id="aboutUs">
          <Box p={{ md: 32, base: 6 }}>
            <AboutUs />
          </Box>
        </section>
        <section id="ourServices">
          <Box px={{ md: 32, base: 6 }}>
            <OurServices />
          </Box>
        </section>
        <section id="news">
          <Box px={{ md: 32, base: 6 }}>
            <HomeNews />
          </Box>
        </section>
        <section id="manaTeam">
          <Box px={{ md: 32, base: 6 }}>
            <Manateam />
          </Box>
        </section>
        <section id="careers">
          <Box px={{ md: 32, base: 6 }}>
            <Career />
          </Box>
        </section>
        <Box py={{ md: 20, base: 6 }} />
      </main>
    </>
  );
}

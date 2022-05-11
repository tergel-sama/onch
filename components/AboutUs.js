import { Box, Image, Flex, Text } from "@chakra-ui/react";

import AboutUsImage from "../images/aboutus.jpg";

export default function AboutUs() {
  return (
    <Flex spacing={0} columns={{ base: 1, md: 2 }}>
      <Box w={"75rem"}>
        <Text pb={12} fontSize={"24px"}>
          Onch & Company was founded in January 2004 as Onch Audit LLC for the
          sole purpose of providing trained, highly qualified, experienced, and
          independent local auditors.
        </Text>

        <Text pb={12} fontSize={"24px"}>
          The founder and current Managing partner Onchinsuren Dendevsambuu had
          significant experience in auditing both global and local organizations
          in Mongolia and Russia at the time she founded Onch Audit. From
          initially only providing auditing services, the firm successfully
          expanded its services to include tax consulting, accounting
          outsourcing and advisory services to its clients.
        </Text>

        <Text pb={12} fontSize={"24px"}>
          Onch Audit joined the Deloitte network in 2012 and operated under
          Deloitte for 10 years until Deloitte’s global decision to withdraw
          from the Mongolian market due to the present macroeconomic business
          and market challenges. With effect from 1 February 2022, rebranded as
          Onch & Company, the same local management and team members have been
          successfully continuing to serve our clients and market with the same
          level of commitment and responsibility as we have been providing since
          its founding.
        </Text>
      </Box>
      <Box
        display={{ base: "none", xl: "unset" }}
        position={"relative"}
        w="full"
      >
        <Box
          rounded={"2xl"}
          className="absolute -top-[90px]  left-[10rem] opacity-[0.4] bg-[#4eb85e]"
          w="640px"
          h="900px"
        ></Box>
        <Image
          className="left-[15rem] absolute"
          w={"720px"}
          h={"740px"}
          rounded={"2xl"}
          alt={"feature image"}
          src={AboutUsImage?.src}
          objectFit={"cover"}
        />
      </Box>
    </Flex>
  );
}

import { Box, Image, Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "next-export-i18n";

import AboutUsImage from "../images/aboutus.jpg";

export default function AboutUs() {
  const { t } = useTranslation();
  return (
    <Flex spacing={0} columns={{ base: 1, md: 2 }}>
      <Box w={"75rem"}>
        <Text
          textAlign={{ base: "justify", md: "left" }}
          pb={12}
          fontSize={"24px"}
        >
          {t("ab1")}
        </Text>

        <Text
          textAlign={{ base: "justify", md: "left" }}
          pb={12}
          fontSize={"24px"}
        >
          {t("ab2")}
        </Text>

        <Text
          textAlign={{ base: "justify", md: "left" }}
          pb={12}
          fontSize={"24px"}
        >
          {t("ab3")}
        </Text>
      </Box>
      <Box
        display={{ base: "none", "2xl": "unset" }}
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

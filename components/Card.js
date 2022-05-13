import React from "react";
import { chakra, Box, Flex, Button } from "@chakra-ui/react";
import { useTranslation } from "next-export-i18n";

export default function App({ number, title, content }) {
  const { t } = useTranslation();
  return (
    <Flex w="full" alignItems="center" justifyContent="center">
      <Box className="group" h={"480px"} w="380px" rounded="2xl">
        <Box
          rounded="2xl"
          className="transition ease-in-out delay-50 bg-opacity-0 hover:-translate-y-1 bg-[#4eb85e] group-hover:bg-opacity-[0.3]"
          zIndex={0}
          py={10}
          px={{ xl: 8, base: 3 }}
        >
          <chakra.h2
            fontSize={"100px"}
            mt={{ base: 2, md: 0 }}
            fontWeight="bold"
            color={"#217b2f"}
          >
            {number}.
          </chakra.h2>

          <chakra.p color={"black"} fontWeight={"bold"} fontSize={"32px"}>
            {title}
          </chakra.p>

          <chakra.p
            fontWeight={"normal"}
            color={"black"}
            fontSize={"20px"}
            mt={2}
            className="threeRows"
          >
            {content}
          </chakra.p>

          <Flex mt={4}>
            <Button
              mt={"6"}
              fontWeight={500}
              rounded={"20px"}
              px={"31px"}
              py={"13px"}
              color={"white"}
              className="transition ease-in delay-50 opacity-0 group-hover:opacity-100"
              bgColor={"#4eb85e"}
            >
              {t("readMore")}
            </Button>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
  Button,
} from "@chakra-ui/react";

export default function App({ number, title, content }) {
  return (
    <Flex w="full" alignItems="center" justifyContent="center">
      <Box className="group" h={"480px"} w="380px" rounded="2xl">
        <Box
          rounded="2xl"
          className="bg-opacity-0 bg-[#4eb85e] group-hover:bg-opacity-[0.3]"
          zIndex={0}
          py={10}
          px={8}
        >
          <chakra.h2
            fontSize={{ base: "2xl", md: "100px" }}
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
              className="invisible group-hover:visible"
              bgColor={"#4eb85e"}
            >
              View more
            </Button>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

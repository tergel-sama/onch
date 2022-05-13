import React from "react";
import { chakra, Box, Flex, useColorModeValue, Link } from "@chakra-ui/react";

export default function App({ name, position, image }) {
  return (
    <Flex w="full" alignItems="center" justifyContent="center">
      <Box overflow="hidden" mx="auto">
        <Box textAlign="center">
          <div className="avatar m-auto">
            <div className="w-[250px] rounded-full">
              <img src={image?.src} />
            </div>
          </div>
          <chakra.span mt={6} display="block" fontSize="20px">
            {position}
          </chakra.span>
          <Link display="block" fontSize="24px" fontWeight="bold">
            {name}
          </Link>
        </Box>
      </Box>
    </Flex>
  );
}

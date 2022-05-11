import React from "react";
import { chakra, Box, Flex, useColorModeValue, Link } from "@chakra-ui/react";

export default function App() {
  return (
    <Flex w="full" alignItems="center" justifyContent="center">
      <Box overflow="hidden" mx="auto">
        <Box textAlign="center">
          <div class="avatar m-auto">
            <div class="w-[350px] rounded-full">
              <img src="https://api.lorem.space/image/face?hash=3174" />
            </div>
          </div>
          <chakra.span mt={6} display="block" fontSize="20px">
            Managing Partner
          </chakra.span>
          <Link display="block" fontSize="24px" fontWeight="bold">
            ONCHINSUREN DENDEVSAMBUU
          </Link>
        </Box>
      </Box>
    </Flex>
  );
}

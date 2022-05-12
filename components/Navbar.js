import React from "react";
import { useRouter } from "next/router";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Image,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../images/logo.png";

export default function Navbar() {
  const mobileNav = useDisclosure();
  const router = useRouter();

  return (
    <React.Fragment>
      <chakra.header
        bg={"black"}
        w="full"
        px={{ base: 2, sm: 32 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <Image w={"150px"} src={Logo?.src} />
              {/* <Logo /> */}
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>
            {/* <chakra.h1 color={"white"} fontSize="xl" fontWeight="medium" ml="2">
              Choc
            </chakra.h1> */}
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="white"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Button onClick={() => router.push("/#aboutUs")} variant="ghost">
                About us
              </Button>
              <Button
                onClick={() => router.push("/#ourServices")}
                variant="ghost"
              >
                Services
              </Button>
              <Button onClick={() => router.push("/#news")} variant="ghost">
                News
              </Button>
              <Button onClick={() => router.push("/#manaTeam")} variant="ghost">
                Team
              </Button>
              <Button onClick={() => router.push("/#careers")} variant="ghost">
                Careers
              </Button>
            </HStack>
            <Button colorScheme="brand" size="sm">
              EN
            </Button>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Button
                  onClick={() => router.push("/#aboutUs")}
                  w="full"
                  variant="ghost"
                >
                  About us
                </Button>
                <Button w="full" variant="ghost">
                  Pricing
                </Button>
                <Button w="full" variant="ghost">
                  Blog
                </Button>
                <Button w="full" variant="ghost">
                  Company
                </Button>
                <Button w="full" variant="ghost">
                  Sign in
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}

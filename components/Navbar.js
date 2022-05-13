import React from "react";
import { useRouter } from "next/router";
import { useTranslation, LanguageSwitcher } from "next-export-i18n";

import {
  chakra,
  Box,
  Text,
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
  const { t } = useTranslation();

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
              <VisuallyHidden>Onch</VisuallyHidden>
            </chakra.a>
          </Flex>
          <HStack
            textColor={"white"}
            display="flex"
            alignItems="center"
            spacing={1}
          >
            <HStack
              spacing={1}
              mr={1}
              color="white"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Button onClick={() => router.push("/#aboutUs")} variant="ghost">
                {t("nav1")}
              </Button>
              <Button
                onClick={() => router.push("/#ourServices")}
                variant="ghost"
              >
                {t("nav2")}
              </Button>
              <Button onClick={() => router.push("/#news")} variant="ghost">
                {t("nav3")}
              </Button>
              <Button onClick={() => router.push("/#manaTeam")} variant="ghost">
                {t("nav4")}
              </Button>
              <Button onClick={() => router.push("/#careers")} variant="ghost">
                {t("nav5")}
              </Button>
            </HStack>
            <LanguageSwitcher lang="mn">mn</LanguageSwitcher>
            <Text>|</Text>
            <LanguageSwitcher lang="en">en</LanguageSwitcher>
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
                bgColor={"black"}
                textColor={"white"}
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
                  {t("nav1")}
                </Button>
                <Button
                  onClick={() => router.push("/#ourServices")}
                  w="full"
                  variant="ghost"
                >
                  {t("nav2")}
                </Button>
                <Button
                  onClick={() => router.push("/#news")}
                  w="full"
                  variant="ghost"
                >
                  {t("nav3")}
                </Button>
                <Button
                  onClick={() => router.push("/#manaTeam")}
                  w="full"
                  variant="ghost"
                >
                  {t("nav4")}
                </Button>
                <Button
                  onClick={() => router.push("/#careers")}
                  w="full"
                  variant="ghost"
                >
                  {t("nav5")}
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}

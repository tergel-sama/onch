import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Input,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { useTranslation } from "next-export-i18n";
import { BiMailSend } from "react-icons/bi";

import Logo from "../images/logo.png";

const ListHeader = ({ children }) => {
  return (
    <Text color={"white"} fontWeight={"bold"} fontSize={"24px"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  const { t } = useTranslation();
  return (
    <Container
      textColor={"white"}
      bgColor={"#252525"}
      as={Stack}
      maxW={"full"}
      py={{ xl: 24, base: 6 }}
      px={{ xl: 32, base: 6 }}
    >
      <SimpleGrid columns={{ md: 3, base: 1 }} spacing={8}>
        <Stack spacing={6}>
          <Box>
            <Image w={"340px"} src={Logo?.src} />
          </Box>
        </Stack>
        <Stack align={{ xl: "flex-start", base: "center" }}>
          <ListHeader>{t("footer1")}</ListHeader>
          <Link fontSize={"20px"} href={"#"}>
            {t("footer3")}
          </Link>
          <Link fontSize={"20px"} href={"#"}>
            {t("footer4")}
          </Link>
          <Link fontSize={"20px"} href={"#"}>
            {t("footer5")}
          </Link>
          <Link w={{ base: "15rem", xl: "30rem" }} fontSize={"20px"} href={"#"}>
            {t("footer2")}
          </Link>
        </Stack>
        <Stack align={{ xl: "flex-start", base: "center" }}>
          <ListHeader>{t("footer7")}</ListHeader>
          <Text fontSize={"20px"} href={"#"}>
            {t("footer6")}
          </Text>
          <Stack direction={"row"}>
            <Input
              placeholder={"Your email address"}
              border={0}
              bgColor={"white"}
              _focus={{
                bg: "whiteAlpha.300",
              }}
            />
            <IconButton
              _hover={{
                bg: "green.600",
              }}
              aria-label="Subscribe"
              icon={<BiMailSend color="black" />}
            />
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}

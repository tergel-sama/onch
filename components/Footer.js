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
          <ListHeader>Company</ListHeader>
          <Link fontSize={"20px"} href={"#"}>
            About us
          </Link>
          <Link fontSize={"20px"} href={"#"}>
            Blog
          </Link>
          <Link fontSize={"20px"} href={"#"}>
            Contact us
          </Link>
          <Link fontSize={"20px"} href={"#"}>
            Pricing
          </Link>
          <Link fontSize={"20px"} href={"#"}>
            Testimonials
          </Link>
        </Stack>
        <Stack align={"flex-start"}>
          <ListHeader>Newsletter</ListHeader>
          <Text fontSize={"20px"} href={"#"}>
            Best solution for your it startup business, consecteturadipiscing
            elit.
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

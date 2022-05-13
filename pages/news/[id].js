import { Box, Image, Text } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";

import Onch from "../../images/onch.jpg";

export default function ItemNews() {
  return (
    <>
      <Box px={{ xl: "30rem", base: 6 }} p={{ md: 32, base: 6 }}>
        <Text fontSize={{ "2xl": "64px", base: "2xl" }} fontWeight={"bold"}>
          3.0 Generations of Onch & Company history have begun.
        </Text>
        <Text my={6} fontSize={"20px"}>
          <TimeIcon /> 2022-04-01
        </Text>
        <Image my={3} src={Onch?.src} />
        <Text my={12} fontSize={"20px"}>
          Our professional, ethical, and skilled team will continue to run our
          campaign under the national brand name “Onch & Company” from February
          2022, and will continue its audit, management and tax advisory
          services, training, and research. <br />
          <br />
          We fist established “Onch Audit” LLC in 2004 and started our services
          as an audit service. The first years of the business required us to
          plug away and working overtime, and soon after 2012, DELOITE, one of
          the four largest audit groups in the world within the history of 177
          years, expanded its scope, by providing its’ services in Mongolia. It
          was our honor to be one of the branch companies of the firm that runs
          its services in more than 150 countries and has more than 400,000
          professionals and is the largest network of professional services in
          the group. <br />
          <br />
          We would like to emphasize that however DELOITE has ceased its
          operations in Mongolia due to the economic situation in the country
          and the limited investment situation, our relations and cooperation
          still remains. <br />
          <br />
          For the past 10 years, we have been successful as part of a
          world-class company. As a result, we have been able to gain
          international and domestic experience in competitive, in-demand and
          innovative markets in Hong Kong, Australia, London and Singapore, as
          well as highlight the specifics of the Mongolian market and domestic
          players. <br />
          <br />
          <br />
          We are pleased to continue to offer our experience and skills of
          working with a world-renowned international company in Mongolia. TO
          BRING YOU TO A NEW PEAK, we will continue to provide professional
          services that fully meet world standards.
        </Text>
      </Box>
    </>
  );
}

import { SimpleGrid } from "@chakra-ui/react";

import NewsCard from "./NewsCard";
import onch from "../images/onch.jpg";
import bird from "../images/one_white_bird.jpg";

export default function HomeNews() {
  return (
    <>
      <h1 className="text-[#217b2f] text-[64px] font-bold my-12">News</h1>
      <SimpleGrid spacing={10} columns={{ xl: 2, base: 1 }}>
        <NewsCard
          imageUrl={onch}
          body={`3.0 generations of Onch & Company history have begun.`}
          date={"2022-04-01"}
        />
        <NewsCard
          imageUrl={bird}
          body={`“ONE WHITE BIRD” MONO OPERA HAS BEEN LAUCHED`}
          date={"2022-04-01"}
        />
      </SimpleGrid>
    </>
  );
}

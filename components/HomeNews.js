import { SimpleGrid } from "@chakra-ui/react";

import NewsCard from "./NewsCard";

export default function HomeNews() {
  return (
    <>
      <h1 className="text-[#217b2f] text-[64px] font-bold my-12">News</h1>
      <SimpleGrid spacing={10} columns={{ md: 2, base: 1 }}>
        <NewsCard />
        <NewsCard />
      </SimpleGrid>
    </>
  );
}

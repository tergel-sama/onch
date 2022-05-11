import { SimpleGrid } from "@chakra-ui/react";
import Member from "./Member";

export default function Manateam() {
  return (
    <>
      <h1 className="text-[#217b2f] text-[64px] font-bold my-12 mt-32">
        Management team
      </h1>
      <SimpleGrid spacingY={"36"} spacing={10} columns={3}>
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
      </SimpleGrid>
    </>
  );
}

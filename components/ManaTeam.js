import { SimpleGrid } from "@chakra-ui/react";
import Member from "./Member";

const data = [
  {
    name: "ONCHINSUREN DENDEVSAMBUU",
    position: "Managing Partner",
  },
  {
    name: "NORJINBAT SHAGDARSUREN",
    position: "CEO/Partner",
  },
  {
    name: "ANKHTAIVAN BATSUKH",
    position: "Partner",
  },
  {
    name: "TSERENNADMID BAYANNEMEKH",
    position: "Director - Advisory service",
  },
  {
    name: "URANBILEG BYAMBASUREN",
    position: "Director - Tax advisory",
  },
  {
    name: "TUVSHIN JAVKHLANT",
    position: "Director - Business Tax",
  },
];

export default function Manateam() {
  return (
    <>
      <h1 className="text-[#217b2f] text-[64px] font-bold my-12 mt-32">
        Management team
      </h1>
      <SimpleGrid spacingY={"36"} spacing={10} columns={{ xl: 3, base: 1 }}>
        {data.map((item, index) => (
          <Member key={index} name={item.name} position={item.position} />
        ))}
      </SimpleGrid>
    </>
  );
}

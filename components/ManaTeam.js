import { SimpleGrid } from "@chakra-ui/react";
import Member from "./Member";
import batsukh from "../images/batsukh.jpg";
import bayannemeh from "../images/bayannemeh.jpg";
import byambasuren from "../images/byambasuren.jpg";
import dendevsambuu from "../images/dendevsambuu.jpg";
import javkhlant from "../images/javkhlant.jpg";
import shagdarsuren from "../images/shagdarsuren.jpg";

const data = [
  {
    name: "ONCHINSUREN DENDEVSAMBUU",
    position: "Managing Partner",
    image: dendevsambuu,
  },
  {
    name: "NORJINBAT SHAGDARSUREN",
    position: "CEO/Partner",
    image: shagdarsuren,
  },
  {
    name: "ANKHTAIVAN BATSUKH",
    position: "Partner",
    image: batsukh,
  },
  {
    name: "TSERENNADMID BAYANNEMEKH",
    position: "Director - Advisory service",
    image: bayannemeh,
  },
  {
    name: "URANBILEG BYAMBASUREN",
    position: "Director - Tax advisory",
    image: byambasuren,
  },
  {
    name: "TUVSHIN JAVKHLANT",
    position: "Director - Business Tax",
    image: javkhlant,
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
          <Member
            key={index}
            name={item.name}
            position={item.position}
            image={item.image}
          />
        ))}
      </SimpleGrid>
    </>
  );
}

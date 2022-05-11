import { HStack, Stack } from "@chakra-ui/react";
import Card from "./Card";
const data = [
  {
    number: "1",
    title: "Audit Consulting Services",
    content:
      "Onch & Company proudly contribute to the integrity and stability of financial markets.",
  },
  {
    number: "2",
    title: "Tax advisory services",
    content:
      "At Onch & Company, our greatest joy comes from witnessing client success.",
  },
  {
    number: "3",
    title: "Risk consulting services",
    content:
      "Risk advisory practice provides comprehensive, in-depth internal control assessment and quality internal audits in accordance with international standards.",
  },
  {
    number: "4",
    title: "Management training",
    content:
      "Our professionals understand the value of going beyond just providing client service and transferring knowledge.",
  },
];
export default function OurServices() {
  return (
    <>
      <h1 className="text-[#217b2f] text-[64px] font-bold">Our services</h1>
      <Stack direction={{ base: "column", "2xl": "row" }}>
        {data.map((item, index) => {
          return (
            <Card
              number={item.number}
              title={item.title}
              content={item.content}
              key={index}
            />
          );
        })}
      </Stack>
    </>
  );
}

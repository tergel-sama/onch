import { useState, useEffect } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { useTranslation } from "next-export-i18n";

import Member from "./Member";
import batsukh from "../images/batsukh.jpg";
import bayannemeh from "../images/bayannemeh.jpg";
import byambasuren from "../images/byambasuren.jpg";
import dendevsambuu from "../images/dendevsambuu.jpg";
import javkhlant from "../images/javkhlant.jpg";
import shagdarsuren from "../images/shagdarsuren.jpg";
import nuurbatsuh from "../images/nuurbatsukh.jpg";

export default function Manateam() {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  useEffect(
    () =>
      setData([
        {
          name: t("manName1"),
          position: t("manPos1"),
          image: dendevsambuu,
        },
        {
          name: t("manName2"),
          position: t("manPos2"),
          image: shagdarsuren,
        },
        {
          name: t("manName3"),
          position: t("manPos3"),
          image: nuurbatsuh,
        },
        {
          name: t("manName4"),
          position: t("manPos4"),
          image: bayannemeh,
        },
        {
          name: t("manName5"),
          position: t("manPos5"),
          image: byambasuren,
        },
        {
          name: t("manName6"),
          position: t("manPos6"),
          image: javkhlant,
        },
      ]),
    [t("manaTeam")]
  );
  return (
    <>
      <h1 className="text-[#217b2f] text-[64px] font-bold my-12 mt-32">
        {t("manaTeam")}
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

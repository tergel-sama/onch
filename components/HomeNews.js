import { SimpleGrid } from "@chakra-ui/react";
import { useTranslation } from "next-export-i18n";

import NewsCard from "./NewsCard";
import onch from "../images/onch.jpg";
import bird from "../images/one_white_bird.jpg";

export default function HomeNews() {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="text-[#217b2f] text-[64px] font-bold my-12">
        {t("news")}
      </h1>
      <SimpleGrid spacing={10} columns={{ xl: 2, base: 1 }}>
        <NewsCard imageUrl={onch} body={t("newsTitle1")} date={"2022-04-01"} />
        <NewsCard imageUrl={bird} body={t("newsTitle2")} date={"2022-04-01"} />
      </SimpleGrid>
    </>
  );
}

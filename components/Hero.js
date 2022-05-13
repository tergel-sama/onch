import { Button } from "@chakra-ui/react";
import { useTranslation } from "next-export-i18n";
import Nuur from "../images/nuur.jpg";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <div
      class="hero min-h-screen"
      style={{
        backgroundImage: `url(${Nuur?.src})`,
      }}
    >
      <div class="hero-overlay bg-opacity-60 bg-black"></div>
      <div class="hero-content text-neutral-content w-full max-w-full">
        <div class="w-full xl:px-32">
          <h1 class="leading-[5rem] mb-5 text-5xl font-bold text-white xl:text-[64px] xl:w-[60rem]">
            {t("heroTitle")}
          </h1>
          <p class="mb-5 text-white xl:w-[50rem]">{t("heroContent")}</p>
          <Button
            fontSize={"15px"}
            rounded={"xl"}
            px={6}
            py={3}
            color="white"
            bgColor="#4eb85e"
          >
            {t("readMore")}
          </Button>
        </div>
      </div>
    </div>
  );
}

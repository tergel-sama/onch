import { Button } from "@chakra-ui/react";
import { useTranslation } from "next-export-i18n";

export default function NewsCard({ imageUrl, body, date, go }) {
  const { t } = useTranslation();
  return (
    <>
      <div className="relative block h-[320px] rounded-2xl bg-black group">
        <img
          className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-50 rounded-2xl"
          src={imageUrl?.src}
          alt=""
        />

        <div className="absolute inset-0 object-cover bg-[#4eb85e] w-full h-full transition-opacity opacity-0 rounded-2xl group-hover:opacity-[0.3]"></div>
        <div className="relative xl:p-14 p-6 xl:pt-[12rem] h-[320px]">
          <p className="text-[20px] font-medium  text-white ">{date}</p>

          <p className="text-2xl font-bold text-white text-[24px]">{body}</p>

          <div className="transition-all float-right transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0">
            <Button
              textColor={"white"}
              rounded={"2xl"}
              mt={{ base: "-2rem", "2xl": 2 }}
              fontWeight={500}
              px={"30px"}
              py={"13px"}
              onClick={() => go()}
              fontSize={"20px"}
              bgColor={"#4eb85e"}
            >
              {t("readMore")}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

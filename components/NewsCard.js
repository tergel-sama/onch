import { Button } from "@chakra-ui/react";

export default function NewsCard({ imageUrl, body, date }) {
  return (
    <>
      <a class="relative block h-[320px] rounded-2xl bg-black group" href="">
        <img
          class="absolute inset-0 object-cover w-full h-full transition-opacity opacity-50 rounded-2xl"
          src={imageUrl?.src}
          alt=""
        />

        <div class="absolute inset-0 object-cover bg-[#4eb85e] w-full h-full transition-opacity opacity-0 rounded-2xl group-hover:opacity-[0.3]"></div>
        <div class="relative xl:p-14 p-6 xl:pt-[12rem] h-[320px]">
          <p class="text-[20px] font-medium  text-white ">{date}</p>

          <p class="text-2xl font-bold text-white text-[24px]">{body}</p>

          <div class="transition-all float-right transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0">
            <Button
              textColor={"white"}
              rounded={"2xl"}
              mt={{ base: "-2rem", "2xl": 2 }}
              fontWeight={500}
              px={"30px"}
              py={"13px"}
              fontSize={"20px"}
              bgColor={"#4eb85e"}
            >
              Read more
            </Button>
          </div>
        </div>
      </a>
    </>
  );
}

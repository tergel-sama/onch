import { Button } from '@chakra-ui/react';
import { useTranslation, useLanguageQuery } from 'next-export-i18n';
import { useRouter } from 'next/router';
import Nuur from '../images/nuur.jpg';

export default function Hero() {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  const router = useRouter();
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${Nuur?.src})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60 bg-black" />
      <div className="hero-content text-neutral-content w-full max-w-full">
        <div className="w-full xl:px-32">
          <h1 className="md:leading-[5rem] leading-[3rem] mb-5 text-4xl font-bold text-white xl:text-[64px] xl:w-[60rem]">
            {t('heroTitle')}
          </h1>
          <p className="mb-5 text-white xl:w-[50rem]">{t('heroContent')}</p>
          <Button
            fontSize="15px"
            rounded="xl"
            px={6}
            py={3}
            color="white"
            bgColor="#4eb85e"
            onClick={() => router.push(`/news/first?lang=${query?.lang}`)}
          >
            {t('readMore')}
          </Button>
        </div>
      </div>
    </div>
  );
}

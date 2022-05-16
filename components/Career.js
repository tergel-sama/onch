import { useState, useEffect } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import { useTranslation } from 'next-export-i18n';

import CareerItem from './CareerItem';

export default function Career() {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  useEffect(
    () =>
      setData([
        {
          title: t('carTitle1'),
          content: t('carContent1'),
        },
        {
          title: t('carTitle2'),
          content: t('carContent2'),
        },
        {
          title: t('carTitle3'),
          content: t('carContent3'),
        },
        {
          title: t('carTitle4'),
          content: t('carContent4'),
        },
        {
          title: t('carTitle5'),
          content: t('carContent5'),
        },
        {
          title: t('carTitle6'),
          content: t('carContent6'),
        },
      ]),
    [t('career')]
  );
  return (
    <>
      <h1 className="text-[#217b2f] md:text-[64px] text-[44px] font-bold my-12 mt-32">
        {t('career')}
      </h1>
      <SimpleGrid spacing={10} columns={{ xl: 3, base: 1 }}>
        {data.map((item, index) => (
          <CareerItem
            key={index}
            title={item.title}
            content={item.content}
            long
          />
        ))}
      </SimpleGrid>
    </>
  );
}

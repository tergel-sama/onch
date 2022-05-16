import { useState, useEffect } from 'react';
import { Stack } from '@chakra-ui/react';
import { useTranslation } from 'next-export-i18n';

import Card from './Card';

export default function OurServices() {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  useEffect(
    () =>
      setData([
        {
          number: '1',
          title: t('ourSer1'),
          content: t('ourSer12'),
        },
        {
          number: '2',
          title: t('ourSer2'),
          content: t('ourSer22'),
        },
        {
          number: '3',
          title: t('ourSer3'),
          content: t('ourSer32'),
        },
        {
          number: '4',
          title: t('ourSer4'),
          content: t('ourSer42'),
        },
      ]),
    [t('ourSer')]
  );
  return (
    <>
      <h1 className="text-[#217b2f] md:text-[64px] text-[44px] font-bold">
        {t('ourSer')}
      </h1>
      <Stack
        p={{ xl: 12, base: 6 }}
        direction={{ base: 'column', '2xl': 'row' }}
      >
        {data?.map((item, index) => (
          <Card
            number={item.number}
            title={item.title}
            content={item.content}
            key={index}
          />
        ))}
      </Stack>
    </>
  );
}

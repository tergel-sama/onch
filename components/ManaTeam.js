import { useState, useEffect } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import { useTranslation } from 'next-export-i18n';

import Member from './Member';
import batsukh from '../images/nuurbatsukh.jpg';
import bayannemeh from '../images/nuurbayannemeh.jpg';
import byambasuren from '../images/nuurbyambasuren.jpg';
import dendevsambuu from '../images/nuurdendevsambuu.jpg';
import javkhlant from '../images/nuurjavhlant.jpg';
import shagdarsuren from '../images/nuurshagdarsuren.jpg';

export default function Manateam() {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  useEffect(
    () =>
      setData([
        {
          name: t('manName1'),
          position: t('manPos1'),
          image: dendevsambuu,
        },
        {
          name: t('manName2'),
          position: t('manPos2'),
          image: shagdarsuren,
        },
        {
          name: t('manName3'),
          position: t('manPos3'),
          image: batsukh,
        },
        {
          name: t('manName4'),
          position: t('manPos4'),
          image: bayannemeh,
        },
        {
          name: t('manName5'),
          position: t('manPos5'),
          image: byambasuren,
        },
        {
          name: t('manName6'),
          position: t('manPos6'),
          image: javkhlant,
        },
      ]),
    [t('manaTeam')]
  );
  return (
    <>
      <h1 className="text-[#217b2f] md:text-[64px] text-[44px] font-bold my-12 mt-32">
        {t('manaTeam')}
      </h1>
      <SimpleGrid spacingY="36" spacing={10} columns={{ xl: 3, base: 1 }}>
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

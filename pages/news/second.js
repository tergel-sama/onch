import { Box, Image, Text } from '@chakra-ui/react';
import { TimeIcon } from '@chakra-ui/icons';
import { useTranslation } from 'next-export-i18n';

import OneWhiteBird from '../../images/one_white_bird.jpg';

export default function ItemNews() {
  const { t } = useTranslation();
  return (
    <Box px={{ xl: '30rem', base: 6 }} p={{ md: 32, base: 6 }}>
      <Text fontSize={{ '2xl': '64px', base: '2xl' }} fontWeight="bold">
        {t('newsTitle2')}
      </Text>
      <Text my={6} fontSize="20px">
        <TimeIcon /> 2022-04-01
      </Text>
      <Image my={3} src={OneWhiteBird?.src} />
      <Text my={12} fontSize="20px">
        {t('newsContent11')}
        <br />
        <br />
        {t('newsContent12')}
        <br />
        <br />
        {t('newsContent13')}
        <br />
        <br />
        {t('newsContent14')}
        <br />
      </Text>
    </Box>
  );
}

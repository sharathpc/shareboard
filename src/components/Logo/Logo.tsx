import { Box, Stack } from '@chakra-ui/react';
import { FaFileWord } from 'react-icons/fa';

import './Logo.scss';
import { APP_NAME } from '../../constants';

function Logo({ size = '1em' }) {
  return (
    <Stack
      direction={'row'}
      alignItems={'center'}>
      <FaFileWord size={size} />
      <Box fontSize={size} fontWeight="bold">{APP_NAME}</Box>
    </Stack>
  );
}

export default Logo;
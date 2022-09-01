import React from 'react';
import { Box, Stack } from '@chakra-ui/react';
import { FaFileWord } from 'react-icons/fa';

import './Logo.scss';

function Logo({ size = '1em' }) {
  return (
    <Stack
      direction={'row'}
      alignItems={'center'}>
      <FaFileWord size={size} />
      <Box fontSize={size} fontWeight="bold">Share Pad</Box>
    </Stack>
  );
}

export default Logo;
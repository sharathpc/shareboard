import { useState } from 'react';
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, ChevronDownIcon } from '@chakra-ui/icons';

import './Header.scss';
import Logo from '../Logo/Logo';

const LANGUAGES_LIST = [{
  label: 'HTML',
  value: 'html'
}, {
  label: 'CSS',
  value: 'css'
}, {
  label: 'Javascript',
  value: 'javascript'
}]

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [language, setLanguage] = useState(LANGUAGES_LIST[2]);

  const handleLanguageChange = (_value: any) => {
    setLanguage(_value);
  }

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Logo size='1.5em' />

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  {language.label}
                </MenuButton>
                <MenuList>
                  {LANGUAGES_LIST.map((lang, index) =>
                    <MenuItem
                      key={`m-${index}`}
                      onClick={() => handleLanguageChange(lang)}>
                      {lang.label}
                    </MenuItem>
                  )}
                </MenuList>
              </Menu>

              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Header;
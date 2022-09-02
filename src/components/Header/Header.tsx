import { useDispatch, useSelector } from 'react-redux';
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
import { LANGUAGES_LIST } from '../../constants';
import { RootState } from '../../redux/rootReducer';
import { setlanguage } from '../../redux/reducers/language';

function Header() {
  const dispatch = useDispatch();
  const { colorMode, toggleColorMode } = useColorMode();
  const { language } = useSelector((state: RootState) => state.language);

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Logo size='1.5em' />

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Box>
                <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    {language.label}
                  </MenuButton>
                  <MenuList>
                    {LANGUAGES_LIST.map((lang, index) =>
                      <MenuItem
                        key={`m-${index}`}
                        onClick={() => dispatch(setlanguage(lang))}
                        style={{ margin: 0 }}>
                        {lang.label}
                      </MenuItem>
                    )}
                  </MenuList>
                </Menu>
              </Box>

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
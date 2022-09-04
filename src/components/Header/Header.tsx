import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Select,
} from '@chakra-ui/react';
import {
  MoonIcon,
  SunIcon,
  LinkIcon,
  CopyIcon
} from '@chakra-ui/icons';

import './Header.scss';
import Logo from '../Logo/Logo';
import { LANGUAGES_LIST } from '../../constants';
import { startConnecting } from '../../redux/reducers/connection';
import { RootState } from '../../redux/rootReducer';
import { setLanguage } from '../../redux/reducers/language';

function Header() {
  const dispatch = useDispatch();
  const { colorMode, toggleColorMode } = useColorMode();
  const { language } = useSelector((state: RootState) => state.language);
  let [liveDisabled, setLiveDisabled] = useState(!!useParams().id);

  const handleLiveShare = () => {
    dispatch(startConnecting());
    setLiveDisabled(true);
  };

  const handleLiveCopy = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Logo size='1.5em' />

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              {liveDisabled ?
                <Button onClick={handleLiveCopy} title='Copy link!'>
                  <CopyIcon />
                </Button> :
                <Button onClick={handleLiveShare}>
                  <LinkIcon />
                </Button>
              }

              <Select
                value={language}
                onChange={(event) => dispatch(setLanguage(event.target.value))}>
                {LANGUAGES_LIST.map((lang, index) =>
                  <option
                    key={`m-${index}`}
                    value={lang}
                  >{lang}
                  </option>
                )}
              </Select>

              <Button onClick={toggleColorMode} title='Change theme'>
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
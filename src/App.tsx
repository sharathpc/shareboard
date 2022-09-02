import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, Flex, Spinner, useColorModeValue } from '@chakra-ui/react';
import SplitPane from 'react-split-pane';

import './App.scss';
import { SPLIT_PANE_SIZE_KEY } from './constants';
import { startConnecting } from './redux/reducers/connection';
import CodeEditor from './components/CodeEditor/CodeEditor';
import TextEditor from './components/TextEditor/TextEditor';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const App = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  let [isLoading, setLoading] = useState(true);
  const borderColor = useColorModeValue('gray.200', 'gray.800');

  useEffect(() => {
    if (id) dispatch(startConnecting(id))
    setLoading(false);
  }, [id, dispatch]);

  return (
    <>
      <Header />
      <Box position="relative" height='calc(100% - 128px)' border={'1px'} borderColor={borderColor}>
        {isLoading ?
          <Flex height='100%' align="center" justify="center">
            <Spinner />
          </Flex> :
          <>
            {/* @ts-ignore */}
            <SplitPane
              split="vertical"
              minSize={0}
              defaultSize={parseInt(localStorage.getItem(SPLIT_PANE_SIZE_KEY) || '0') || '60%'}
              onChange={(size) => localStorage.setItem(SPLIT_PANE_SIZE_KEY, size.toString())}>
              <CodeEditor />
              <TextEditor />
            </SplitPane>
          </>
        }
      </Box>
      <Box pos="fixed" bottom="0" w="100%">
        <Footer />
      </Box>
    </>
  );
}

export default App;

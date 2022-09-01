import React from 'react';
import { Box } from '@chakra-ui/react';
import SplitPane from 'react-split-pane';

import './App.scss';
import CodeEditor from './components/CodeEditor/CodeEditor';
import TextEditor from './components/TextEditor/TextEditor';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Box position="relative" height='calc(100% - 128px)'>
        {/* @ts-ignore */}
        <SplitPane split="vertical" defaultSize="60%" minSize={0}>
          <CodeEditor />
          <TextEditor />
        </SplitPane>
      </Box>
      <Box pos="fixed" bottom="0" w="100%">
        <Footer />
      </Box>
    </>
  );
}

export default App;

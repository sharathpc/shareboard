import React, { useState } from 'react';
import { useColorMode } from '@chakra-ui/react';
import MonacoEditor from '@monaco-editor/react';

import './CodeEditor.scss';

function CodeEditor() {
  const options = {
    minimap: {
      enabled: false
    }
  }

  const { colorMode } = useColorMode();

  const handleValueChange = (value?: string) => {
    console.log(value);
  }

  return (
    <MonacoEditor
      theme={colorMode === 'light' ? 'vs-light' : 'vs-dark'}
      height='100%'
      /* defaultLanguage={language} */
      defaultLanguage='javascript'
      defaultValue='// Start writing'
      options={options}
      onChange={handleValueChange}
    />
  );
}

export default CodeEditor;

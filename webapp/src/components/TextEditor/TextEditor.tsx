import React from 'react';
import { Box } from '@chakra-ui/react';
import { $getRoot, $getSelection } from "lexical";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";

import './TextEditor.scss';

function TextEditor() {
  const editorConfig = {
    namespace: 'sharepad',
    onError(error: any) {
      throw error;
    },
    nodes: []
  };

  const handleValueChange = (editorState: { read: (arg0: () => void) => void; }) => {
    editorState.read(() => {
      // Read the contents of the EditorState here.
      const root = $getRoot();
      const selection = $getSelection();

      console.log(root, selection);
    });
  }

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <Box position='relative' h='100%'>
        <PlainTextPlugin
          contentEditable={<ContentEditable className='editorInput' />}
          placeholder={<div className='editorPlaceholder'>Enter some text...</div>}
        />
      </Box>
      <OnChangePlugin onChange={handleValueChange} />
      <HistoryPlugin />
    </LexicalComposer>
  );
}

export default TextEditor;

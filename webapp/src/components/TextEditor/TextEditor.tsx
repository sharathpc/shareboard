import { useDispatch } from 'react-redux';
import { Box } from '@chakra-ui/react';
import { $getRoot } from "lexical";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";

import './TextEditor.scss';
import { TEXT_EDITOR_CONFIG } from '../../constants';
import { RootState } from '../../redux/rootReducer';
import { setValue } from '../../redux/reducers/textEditor';

function TextEditor() {
  const dispatch = useDispatch();

  const handleValueChange = (editorState: any) => {
    editorState.read(() => {
      const root = $getRoot();
      //const selection = $getSelection();
      const value = root.getTextContent();
      dispatch(setValue(value));
    });
  }

  return (
    <LexicalComposer initialConfig={TEXT_EDITOR_CONFIG}>
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

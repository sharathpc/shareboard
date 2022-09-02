import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react';
import { EditorState } from 'lexical/LexicalEditorState';
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import throttle from 'lodash.throttle';

import './TextEditor.scss';
import { TEXT_EDITOR_CONFIG, THROTTLE_TIME } from '../../constants';
import { RootState } from '../../redux/rootReducer';
import { setValue } from '../../redux/reducers/textEditor';


function RestoreFromStatePlugin() {
  const dispatch = useDispatch();
  const [editor] = useLexicalComposerContext()
  const { value } = useSelector((state: RootState) => state.textEditor);

  useEffect(() => {
    const oldValue = JSON.stringify(editor.toJSON().editorState);

    if (oldValue !== value) {
      const initialEditorState = editor.parseEditorState(value)
      editor.setEditorState(initialEditorState)
    }
  }, [value, editor])

  const throttleSetValue = throttle((nextValue) => dispatch(setValue(nextValue)), THROTTLE_TIME);

  const onChange = useCallback((editorState: EditorState) => {
    const jsonValue = editorState.toJSON();
    throttleSetValue(JSON.stringify(jsonValue))
  }, [throttleSetValue])

  return <OnChangePlugin onChange={onChange} />
}

function TextEditor() {
  return (
    <LexicalComposer initialConfig={TEXT_EDITOR_CONFIG}>
      <Box position='relative' h='100%'>
        <PlainTextPlugin
          contentEditable={<ContentEditable className='editorInput' />}
          placeholder={<div className='editorPlaceholder'>Enter some text...</div>}
        />
      </Box>
      <RestoreFromStatePlugin />
      <HistoryPlugin />
    </LexicalComposer>
  );
}

export default TextEditor;

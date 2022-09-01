import { useDispatch, useSelector } from 'react-redux';
import { useColorMode } from '@chakra-ui/react';
import MonacoEditor from '@monaco-editor/react';

import './CodeEditor.scss';
import { CODE_EDITOR_CONFIG } from '../../constants';
import { RootState } from '../../redux/rootReducer';
import { setValue } from '../../redux/reducers/codeEditor';

function CodeEditor() {
  const dispatch = useDispatch();
  const { colorMode } = useColorMode();
  const { language } = useSelector((state: RootState) => state.language);
  const { value } = useSelector((state: RootState) => state.codeEditor);

  const handleValueChange = (value: string = '') => {
    dispatch(setValue(value));
  }

  return (
    <MonacoEditor
      theme={colorMode === 'light' ? 'vs-light' : 'vs-dark'}
      height='100%'
      value={value}
      language={language.value}
      options={CODE_EDITOR_CONFIG}
      onChange={handleValueChange}
    />
  );
}

export default CodeEditor;

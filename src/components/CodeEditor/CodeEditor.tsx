import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useColorMode } from '@chakra-ui/react';
import MonacoEditor from '@monaco-editor/react';
import throttle from 'lodash.throttle';

import './CodeEditor.scss';
import { CODE_EDITOR_CONFIG, THROTTLE_TIME } from '../../constants';
import { RootState } from '../../redux/rootReducer';
import { setValue } from '../../redux/reducers/codeEditor';

function CodeEditor() {
  const dispatch = useDispatch();
  const { colorMode } = useColorMode();
  const { language } = useSelector((state: RootState) => state.language);
  const { value } = useSelector((state: RootState) => state.codeEditor);

  const throttleSetValue = useMemo(
    () => throttle((nextValue) =>
      dispatch(setValue(nextValue)),
      THROTTLE_TIME
    ), [dispatch]
  );

  useEffect(() => {
    return () => throttleSetValue.cancel();
  }, [throttleSetValue])

  return (
    <MonacoEditor
      theme={colorMode === 'light' ? 'vs-light' : 'vs-dark'}
      height='100%'
      value={value}
      language={language}
      options={CODE_EDITOR_CONFIG}
      onChange={(value: string = '') => throttleSetValue(value)}
    />
  );
}

export default CodeEditor;

import { Middleware } from 'redux'
import { io, Socket } from 'socket.io-client';
import { push } from "connected-react-router";
import uuid from "react-uuid";

import { startConnecting, connectionEstablished } from '../reducers/connection';
import { setLanguage, setSocketLanguage } from '../reducers/language';
import { setValue as setCodeValue, setSocketValue as setSocketCodeValue } from '../reducers/codeEditor';
import { setValue as setTextValue, setSocketValue as setSocketTextValue } from '../reducers/textEditor';

const connectionMiddleware: Middleware = store => {
  let socket: Socket;
  let sessionId: string;

  console.log(process.env.REACT_APP_SERVICE_URL);

  return next => action => {
    const isConnectionEstablished = socket && store.getState().connection.isConnected;

    if (startConnecting.match(action)) {
      socket = io(process.env.REACT_APP_SERVICE_URL as string);

      socket.on('connect', () => {
        store.dispatch(connectionEstablished());
        if (!action.payload) {
          sessionId = uuid();
          socket.emit('setData', {
            sessionId,
            value: {
              language: store.getState().language.language,
              codeValue: store.getState().codeEditor.value,
              textValue: store.getState().textEditor.value,
            }
          });
          store.dispatch(push(`/${sessionId}`));
          navigator.clipboard.writeText(window.location.href);
        } else {
          sessionId = store.getState().router.location.pathname.substring(1);
          socket.emit('retriveData', { sessionId, value: null });
        }
      })

      socket.on('readData', (data: any) => {
        if (data) {
          if (data.language) {
            store.dispatch(setSocketLanguage(data.language));
          }
          if (data.codeValue) {
            store.dispatch(setSocketCodeValue(data.codeValue));
          }
          if (data.textValue) {
            store.dispatch(setSocketTextValue(data.textValue));
          }
        }
      })
    }

    if (isConnectionEstablished && (
      setLanguage.match(action) ||
      setCodeValue.match(action) ||
      setTextValue.match(action)
    )) {
      socket.emit(action.type, {
        sessionId: sessionId,
        value: action.payload
      });
    }

    next(action);
  }
}

export default connectionMiddleware;
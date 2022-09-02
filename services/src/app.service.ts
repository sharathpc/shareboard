import { Injectable } from '@nestjs/common';

import { MessageDto } from './dto/message.dto';
import { Session } from './entities/session.entity';

@Injectable()
export class AppService {
  private sessions = {};

  setLanguage(messageDto: MessageDto) {
    let sessionObj = this.getSessionObject(messageDto.sessionId);
    let valueObj = { language: messageDto.value };

    this.sessions[messageDto.sessionId] = { ...sessionObj, ...valueObj }
    return valueObj;
  }

  setCodeValue(messageDto: MessageDto) {
    let sessionObj = this.getSessionObject(messageDto.sessionId);
    let valueObj = { codeValue: messageDto.value };

    this.sessions[messageDto.sessionId] = { ...sessionObj, ...valueObj }
    return valueObj;
  }

  setTextValue(messageDto: MessageDto) {
    let sessionObj = this.getSessionObject(messageDto.sessionId);
    let valueObj = { textValue: messageDto.value };

    this.sessions[messageDto.sessionId] = { ...sessionObj, ...valueObj }
    return valueObj;
  }

  setData(messageDto: MessageDto) {
    this.sessions[messageDto.sessionId] = messageDto.value;
  }

  retriveData(messageDto: MessageDto) {
    return this.sessions[messageDto.sessionId];
  }

  private getSessionObject(sessionId): Session {
    if (!this.sessions[sessionId]) {
      this.sessions[sessionId] = {};
    }
    return this.sessions[sessionId]
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import throttle from 'lodash.throttle';

import { MessageDto } from './dto/message.dto';
import { Session } from './entities/session.entity';

@Injectable()
export class AppService {
  sessionsQueries: Session[] = [];
  throttleFun = throttle(() => {
    if (this.sessionsQueries.length) {
      const setData = this.sessionsRepository.create(this.sessionsQueries);
      this.sessionsRepository.save(setData);
      this.sessionsQueries = [];
    }
  }, 10000);

  constructor(
    @InjectRepository(Session)
    private sessionsRepository: Repository<Session>
  ) { }

  setLanguage(messageDto: MessageDto) {
    const queryObj = {
      sessionId: messageDto.sessionId,
      language: messageDto.value
    }
    this.createUpdateData(queryObj);
    return queryObj;
  }

  setCodeValue(messageDto: MessageDto) {
    const queryObj = {
      sessionId: messageDto.sessionId,
      codeValue: messageDto.value
    }
    this.createUpdateData(queryObj);
    return queryObj;
  }

  setTextValue(messageDto: MessageDto) {
    const queryObj = {
      sessionId: messageDto.sessionId,
      textValue: messageDto.value
    }
    this.createUpdateData(queryObj);
    return queryObj;
  }

  setData(messageDto: MessageDto) {
    this.createUpdateData({
      sessionId: messageDto.sessionId,
      ...messageDto.value
    });
  }

  async retriveData(messageDto: MessageDto) {
    return await this.sessionsRepository.findOneBy({
      sessionId: messageDto.sessionId
    });
  }

  createUpdateData(dataObj) {
    this.sessionsQueries.push(dataObj);
    this.throttleFun();
  }
}

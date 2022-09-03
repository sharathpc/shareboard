import { WebSocketGateway, SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { Socket } from 'socket.io';

import { AppService } from './app.service';
import { MessageDto } from './dto/message.dto';

@WebSocketGateway({
  cors: {
    origin: '*'
  }
})
export class AppGateway {
  constructor(private readonly appService: AppService) { }

  @SubscribeMessage('language/setLanguage')
  async setLanguage(
    @MessageBody() messageDto: MessageDto,
    @ConnectedSocket() client: Socket
  ) {
    const data = await this.appService.setLanguage(messageDto);
    client.broadcast.to(messageDto.sessionId).emit('readData', data);
  }

  @SubscribeMessage('codeEditor/setValue')
  async setCodeValue(
    @MessageBody() messageDto: MessageDto,
    @ConnectedSocket() client: Socket
  ) {
    const data = await this.appService.setCodeValue(messageDto);
    client.broadcast.to(messageDto.sessionId).emit('readData', data);
  }

  @SubscribeMessage('textEditor/setValue')
  async setTextValue(
    @MessageBody() messageDto: MessageDto,
    @ConnectedSocket() client: Socket
  ) {
    const data = await this.appService.setTextValue(messageDto);
    client.broadcast.to(messageDto.sessionId).emit('readData', data);
  }

  @SubscribeMessage('setData')
  setData(
    @MessageBody() messageDto: MessageDto,
    @ConnectedSocket() client: Socket
  ) {
    client.join(messageDto.sessionId);
    return this.appService.setData(messageDto);
  }

  @SubscribeMessage('retriveData')
  async retriveData(
    @MessageBody() messageDto: MessageDto,
    @ConnectedSocket() client: Socket
  ) {
    const data = await this.appService.retriveData(messageDto);
    client.join(messageDto.sessionId);
    client.emit('readData', data);
  }
}

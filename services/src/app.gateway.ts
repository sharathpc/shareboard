import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, ConnectedSocket } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

import { AppService } from './app.service';
import { MessageDto } from './dto/message.dto';

@WebSocketGateway({
  cors: '*'
})
export class AppGateway {
  @WebSocketServer() server: Server;

  constructor(private readonly appService: AppService) { }

  @SubscribeMessage('language/setLanguage')
  setLanguage(
    @MessageBody() messageDto: MessageDto,
    @ConnectedSocket() client: Socket
  ) {
    const data = this.appService.setLanguage(messageDto);
    client.broadcast.emit('readData', data);
  }

  @SubscribeMessage('codeEditor/setValue')
  setCodeValue(
    @MessageBody() messageDto: MessageDto,
    @ConnectedSocket() client: Socket
  ) {
    const data = this.appService.setCodeValue(messageDto);
    client.broadcast.emit('readData', data);
  }

  @SubscribeMessage('textEditor/setValue')
  setTextValue(
    @MessageBody() messageDto: MessageDto,
    @ConnectedSocket() client: Socket
  ) {
    const data = this.appService.setTextValue(messageDto);
    client.broadcast.emit('readData', data);
  }

  @SubscribeMessage('setData')
  setData(@MessageBody() messageDto: MessageDto) {
    return this.appService.setData(messageDto);
  }

  @SubscribeMessage('retriveData')
  async retriveData(
    @MessageBody() messageDto: MessageDto,
    @ConnectedSocket() client: Socket
  ) {
    const data = await this.appService.retriveData(messageDto);
    client.emit('readData', data);
  }
}
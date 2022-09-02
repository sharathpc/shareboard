import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { AppService } from './app.service';
import { CreateAppDto } from './dto/create-app.dto';
import { UpdateAppDto } from './dto/update-app.dto';

@WebSocketGateway()
export class AppGateway {
  constructor(private readonly appService: AppService) {}

  @SubscribeMessage('createApp')
  create(@MessageBody() createAppDto: CreateAppDto) {
    return this.appService.create(createAppDto);
  }

  @SubscribeMessage('findAllApp')
  findAll() {
    return this.appService.findAll();
  }

  @SubscribeMessage('findOneApp')
  findOne(@MessageBody() id: number) {
    return this.appService.findOne(id);
  }

  @SubscribeMessage('updateApp')
  update(@MessageBody() updateAppDto: UpdateAppDto) {
    return this.appService.update(updateAppDto.id, updateAppDto);
  }

  @SubscribeMessage('removeApp')
  remove(@MessageBody() id: number) {
    return this.appService.remove(id);
  }
}

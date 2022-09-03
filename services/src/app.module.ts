import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppService } from './app.service';
import { AppGateway } from './app.gateway';
import { Session } from './entities/session.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      url: process.env.DATABASE_URL,
      type: 'postgres',
      ssl: {
        rejectUnauthorized: false,
      },
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([Session])
  ],
  providers: [
    AppGateway,
    AppService
  ]
})
export class AppModule { }

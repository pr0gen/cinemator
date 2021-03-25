import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImdbModule } from './imdb/imdb.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { AuthModule } from './users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [
      TypeOrmModule.forRoot(),
      ConfigModule,
      ImdbModule,
      AuthModule,
      UsersModule],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}

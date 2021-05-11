import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImdbModule } from './imdb/imdb.module';
import { TheMovieDbModule } from './the-movie-db/the-movie-db.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ApiAuthService } from './api-auth/api-auth.service';
import { ApiAuthModule } from './api-auth/api-auth.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [TypeOrmModule.forRoot(),ConfigModule, ImdbModule, ApiAuthModule, TheMovieDbModule, UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, ApiAuthService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}

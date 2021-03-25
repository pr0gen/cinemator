import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImdbModule } from './imdb/imdb.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { TheMovieDbModule } from './the-movie-db/the-movie-db.module';

@Module({
  imports: [ConfigModule, ImdbModule, AuthModule, TheMovieDbModule],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {
}

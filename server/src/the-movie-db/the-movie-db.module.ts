import { HttpModule } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from 'src/auth/auth.service';
import { TheMovieDbController } from './the-movie-db.controller';
import { TheMovieDbService } from './the-movie-db.service';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [TheMovieDbController],
  providers: [TheMovieDbService, AuthService]
})
export class TheMovieDbModule {}

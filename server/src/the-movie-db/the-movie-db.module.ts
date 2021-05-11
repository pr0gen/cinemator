import { HttpModule } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiAuthService } from 'src/auth/api-auth.service';
import { TheMovieDbController } from './the-movie-db.controller';
import { TheMovieDbService } from './the-movie-db.service';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [TheMovieDbController],
  providers: [TheMovieDbService, ApiAuthService]
})
export class TheMovieDbModule {}

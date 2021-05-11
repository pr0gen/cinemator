import { HttpModule, CacheInterceptor, CacheModule } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiAuthService } from '../api-auth/api-auth.service';
import { TheMovieDbController } from './the-movie-db.controller';
import { TheMovieDbService } from './the-movie-db.service';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [HttpModule, ConfigModule, CacheModule.register()],
  controllers: [TheMovieDbController],
  providers: [
    TheMovieDbService,
    ApiAuthService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class TheMovieDbModule {}

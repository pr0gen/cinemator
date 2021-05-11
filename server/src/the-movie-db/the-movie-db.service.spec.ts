import { HttpModule, CacheModule, CacheInterceptor } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { ApiAuthService } from '../api-auth/api-auth.service';
import { TheMovieDbService } from './the-movie-db.service';
import { APP_INTERCEPTOR } from '@nestjs/core';

describe('TheMovieDbService', () => {
  let service: TheMovieDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, ConfigModule, CacheModule.register()],
      providers: [TheMovieDbService, ApiAuthService,
        {
          provide: APP_INTERCEPTOR,
          useClass: CacheInterceptor,
        },
      ],
    }).compile();

    service = module.get<TheMovieDbService>(TheMovieDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

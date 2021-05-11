import { HttpModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { ApiAuthService } from '../api-auth/api-auth.service';
import { TheMovieDbService } from './the-movie-db.service';

describe('TheMovieDbService', () => {
  let service: TheMovieDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, ConfigModule],
      providers: [TheMovieDbService, ApiAuthService],
    }).compile();

    service = module.get<TheMovieDbService>(TheMovieDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

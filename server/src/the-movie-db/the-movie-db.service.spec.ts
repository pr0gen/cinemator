import { HttpModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../auth/auth.service';
import { TheMovieDbService } from './the-movie-db.service';

describe('TheMovieDbService', () => {
  let service: TheMovieDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, ConfigModule],
      providers: [TheMovieDbService, AuthService],
    }).compile();

    service = module.get<TheMovieDbService>(TheMovieDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { HttpModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { TheMovieDbController } from './the-movie-db.controller';
import { TheMovieDbService } from './the-movie-db.service';
import { ApiAuthService } from '../api-auth/api-auth.service';

describe('TheMovieDbController', () => {
  let controller: TheMovieDbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, ConfigModule],
      controllers: [TheMovieDbController],
      providers: [TheMovieDbService, ApiAuthService]
    }).compile();

    controller = module.get<TheMovieDbController>(TheMovieDbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { HttpModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { TheMovieDbController } from './the-movie-db.controller';
import { AuthService } from '../auth/auth.service';
import { TheMovieDbService } from './the-movie-db.service';

describe('TheMovieDbController', () => {
  let controller: TheMovieDbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, ConfigModule],
      controllers: [TheMovieDbController],
      providers: [TheMovieDbService, AuthService]
    }).compile();

    controller = module.get<TheMovieDbController>(TheMovieDbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { HttpModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../auth/auth.service';
import { ImdbController } from './imdb.controller';
import { ImdbService } from './imdb.service';

describe('ImdbController', () => {
  let controller: ImdbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, ConfigModule],
      controllers: [ImdbController],
      providers: [ImdbService, AuthService]
    }).compile();

    controller = module.get<ImdbController>(ImdbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

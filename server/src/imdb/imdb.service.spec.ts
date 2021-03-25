import { HttpModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../auth/auth.service';
import { ImdbService } from './imdb.service';

describe('ImdbService', () => {
  let service: ImdbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, ConfigModule],
      providers: [ImdbService, AuthService],
    }).compile();

    service = module.get<ImdbService>(ImdbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

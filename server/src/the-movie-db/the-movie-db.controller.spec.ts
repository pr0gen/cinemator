import { HttpModule, CacheModule, CacheInterceptor } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { TheMovieDbController } from './the-movie-db.controller';
import { TheMovieDbService } from './the-movie-db.service';
import { ApiAuthService } from '../api-auth/api-auth.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CinematorLogger } from '../logger/logger';

describe('TheMovieDbController', () => {
    let controller: TheMovieDbController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [HttpModule, ConfigModule, CacheModule.register()],
            controllers: [TheMovieDbController],
            providers: [
                TheMovieDbService,
                ApiAuthService,
                {
                    provide: APP_INTERCEPTOR,
                    useClass: CacheInterceptor,
                },
                CinematorLogger
            ],
        }).compile();

        controller = module.get<TheMovieDbController>(TheMovieDbController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});

import { Test, TestingModule } from '@nestjs/testing';
import { User } from './user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MockType, repositoryMockFactory } from '../test.utils';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CacheInterceptor, CacheModule, INestApplication, ValidationPipe } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import * as request from 'supertest';
import { CinematorLogger } from '../logger/logger';

describe('AppController', () => {
    let userRepository: MockType<Repository<User>>;
    let app: INestApplication;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [CacheModule.register()],
            controllers: [UsersController],
            providers: [
                UsersService,
                { provide: getRepositoryToken(User), useFactory: repositoryMockFactory },
                { provide: APP_INTERCEPTOR, useClass: CacheInterceptor, },
                CinematorLogger
            ],
        }).compile();

        userRepository = module.get(getRepositoryToken(User));

        app = module.createNestApplication();
        app.useGlobalPipes(new ValidationPipe());

        await app.init();
    });

    afterEach(() => {
        return app && app.close();
    });

    describe('root', () => {

        it('should create user', async () => {
            let user = {
                id: 1, username: "Tigran", email: "tigran@example.com",
                isActive: false, updatedAt: new Date().toDateString(), createdAt: new Date().toDateString()
            };
            userRepository.save.mockReturnValue(Promise.resolve(user));

            return request(app.getHttpServer())
                .post('/users/create')
                .send({
                    username: "Tigran",
                    email: "tigran@example.com",
                    password: "password"
                })
                .expect(201)
                .expect(user);
        });

        // it('should delete user', async () => {
        // // userRepository.remove.mockReturnValue();
        // return request(app.getHttpServer())
        // .delete('/users?user_id=1')
        // .expect(200);
        // 
        // 
        // });
    });
});

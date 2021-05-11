import { Module, CacheModule, CacheInterceptor } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';
import { ApiAuthService } from '../api-auth/api-auth.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    CacheModule.register(),
    ConfigModule.forRoot(),
  ],
  providers: [
    UsersService,
    ApiAuthService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}

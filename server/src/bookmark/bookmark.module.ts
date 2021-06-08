import { Module, CacheModule, CacheInterceptor } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiAuthService } from '../api-auth/api-auth.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { BookmarkService } from './bookmark.service';
import { BookmarkController } from './bookmark.controller';
import { Bookmark } from './bookmark.entity';
import { UsersModule } from '../users/users.module';

@Module({

  imports: [
    TypeOrmModule.forFeature([Bookmark]),
    CacheModule.register(),
    ConfigModule.forRoot(),
    UsersModule
  ],
  providers: [
    BookmarkService,
    ApiAuthService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
  exports: [BookmarkService],
  controllers: [BookmarkController],

})
export class BookmarkModule {}


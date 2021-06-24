import { Module, CacheModule, CacheInterceptor } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';
import { ApiAuthService } from '../api-auth/api-auth.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { CinematorLogger } from '../logger/logger';
import { BookmarkModule } from 'src/bookmark/bookmark.module';
import { LikeModule } from 'src/like/like.module';
import { BookmarkService } from 'src/bookmark/bookmark.service';
import { LikeService } from 'src/like/like.service';
import { Bookmark } from 'src/bookmark/bookmark.entity';
import { UserLike } from 'src/like/like.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([User, Bookmark, UserLike]),
        CacheModule.register(),
        ConfigModule.forRoot(),
        BookmarkModule,
        LikeModule
    ],
    providers: [
        UsersService,
        ApiAuthService,
        {
            provide: APP_INTERCEPTOR,
            useClass: CacheInterceptor,
        },
        CinematorLogger,
        BookmarkService,
        LikeService
    ],
    exports: [UsersService],
    controllers: [UsersController],
})
export class UsersModule { }

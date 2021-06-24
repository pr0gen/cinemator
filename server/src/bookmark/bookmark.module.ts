import { Module, CacheModule, CacheInterceptor } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiAuthService } from '../api-auth/api-auth.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { BookmarkService } from './bookmark.service';
import { BookmarkController } from './bookmark.controller';
import { Bookmark } from './bookmark.entity';
import { CinematorLogger } from '../logger/logger';

@Module({

    imports: [
        TypeOrmModule.forFeature([Bookmark]),
        CacheModule.register(),
        ConfigModule.forRoot(),
    ],
    providers: [
        BookmarkService,
        ApiAuthService,
        {
            provide: APP_INTERCEPTOR,
            useClass: CacheInterceptor,
        },
        CinematorLogger
    ],
    exports: [BookmarkService],
    controllers: [BookmarkController],

})
export class BookmarkModule { }


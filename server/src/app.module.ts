import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TheMovieDbModule } from './the-movie-db/the-movie-db.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiAuthService } from './api-auth/api-auth.service';
import { ApiAuthModule } from './api-auth/api-auth.module';
import { AuthModule } from './auth/auth.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { LikeModule } from './like/like.module';
import { LoggerModule } from './logger/logger.module';


@Module({
    imports: [
        TypeOrmModule.forRoot(),
        ConfigModule,
        ApiAuthModule,
        TheMovieDbModule,
        UsersModule,
        AuthModule,
        BookmarkModule,
        LikeModule,
        LoggerModule
    ],
    controllers: [AppController],
    providers: [
        AppService,
        ApiAuthService,
    ],
})
export class AppModule {
    constructor() { }
}

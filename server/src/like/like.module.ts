import { Module } from '@nestjs/common';
import { LikeService } from './like.service';
import { LikeController } from './like.controller';
import { UserLike } from './like.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CinematorLogger } from '../logger/logger';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserLike]),
    ],
    providers: [LikeService, CinematorLogger],
    exports: [LikeService],
    controllers: [LikeController]
})
export class LikeModule { }

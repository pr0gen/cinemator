import { Module } from '@nestjs/common';
import { LikeService } from './like.service';
import { LikeController } from './like.controller';
import { UserLike } from './like.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserLike]),
    UsersModule
  ],
  providers: [LikeService],
  exports: [LikeService],
  controllers: [LikeController]
})
export class LikeModule {}

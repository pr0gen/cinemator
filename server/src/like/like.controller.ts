import { Body, Controller, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { InputLike } from './like.entity';
import { LikeService } from './like.service';

@Controller('like')
export class LikeController {

    constructor(private readonly likeService: LikeService) { }

    @UseGuards(JwtAuthGuard)
    @Put('update')
    public async update_like(@Body() like: InputLike) {
        this.likeService.updateLike(like);
    }



}

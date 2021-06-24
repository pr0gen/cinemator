import { Body, Controller, Get, InternalServerErrorException, Put, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CinematorLogger } from '../logger/logger';
import { InputLike, UserLike } from './like.entity';
import { LikeService } from './like.service';

@Controller('like')
export class LikeController {

    constructor(private readonly likeService: LikeService,
        private readonly logger: CinematorLogger
    ) { }

    @UseGuards(JwtAuthGuard)
    @Put('update')
    public async update_like(@Body() like: InputLike) {
        return this.likeService.updateLike(like)
            .then(b => {
                this.logger.log('[UPDATE LIKE] ' + (b ? 'DELETE' : 'ADD') + '  owner: ' + like.ownerId + ' filmId: ' + like.filmId)
            })
            .catch(e => {
                this.logger.error('[UPDATE LIKE] Failed for owner: ' + like.ownerId + ' filmId: ' + like.filmId, e)
                throw new InternalServerErrorException('Failed to update your like');
            });
    }

    @UseGuards(JwtAuthGuard)
    @Get('owner')
    public async get_likes(@Query('ownerId') ownerId: number): Promise<UserLike[]> {
        return this.likeService.findByOwner(ownerId);
    }



}

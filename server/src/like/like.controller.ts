import { Body, Controller, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CinematorLogger } from 'src/logger/logger';
import { InputLike } from './like.entity';
import { LikeService } from './like.service';

@Controller('like')
export class LikeController {

    constructor(private readonly likeService: LikeService,
        private readonly logger: CinematorLogger
    ) { }

    @UseGuards(JwtAuthGuard)
    @Put('update')
    public async update_like(@Body() like: InputLike) {
        this.likeService.updateLike(like)
            .then(() => this.logger.log('[UPDATE LIKE] owner: ' + like.owner + ' filmId: ' + like.filmId))
            .catch(e => this.logger.error('[UPDATE LIKE] Failed for owner: ' + like.owner + ' filmId: ' + like.filmId, e));
    }



}

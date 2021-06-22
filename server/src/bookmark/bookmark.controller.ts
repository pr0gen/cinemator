import { Body, Controller, Delete, Get, InternalServerErrorException, Post, Query, UseGuards } from '@nestjs/common';
import { CinematorLogger } from 'src/logger/logger';
import { DeleteResult } from 'typeorm';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { InputBookmark, Bookmark } from './bookmark.entity';
import { BookmarkService } from './bookmark.service';

@Controller('bookmark')
export class BookmarkController {

    constructor(private readonly bookmarkService: BookmarkService,
        private readonly logger: CinematorLogger) {
    }

    @UseGuards(JwtAuthGuard)
    @Post('create')
    public async create_user(@Body() newBookmark: InputBookmark): Promise<Bookmark> {
        return this.bookmarkService.createOne(newBookmark)
            .then(bookmark => {
                this.logger.log('[BOOKMARK CREATE] for owner:' + newBookmark.owner + 'filmId: ' + newBookmark.filmId);
                return Promise.resolve(bookmark);
            })
            .catch(e => {
                this.logger.error('[BOOKMARK CREATE] Failed for owner:' + newBookmark.owner + 'filmId: ' + newBookmark.filmId, e);
                throw new InternalServerErrorException(e);
            });
    }

    @UseGuards(JwtAuthGuard)
    @Get('owner')
    public async get_bookmarks(@Query('owner') owner: string): Promise<Bookmark[]> {
        return this.bookmarkService.findByOwner(owner)
            .then(bookmarks => {
                this.logger.log('[BOOKMARK FIND] for owner:' + owner);
                return Promise.resolve(bookmarks);
            })
            .catch(e => {
                this.logger.error('[BOOKMARK FIND] Failed for owner:' + owner, e);
                throw new InternalServerErrorException(e);
            });
    }

    @UseGuards(JwtAuthGuard)
    @Delete()
    public async delete_bookmark(@Query('filmId') id: number): Promise<DeleteResult> {
        return this.bookmarkService.removeBookmark(id)
            .then(bookmarks => {
                this.logger.log('[BOOKMARK DELETE] id: ' + id);
                return Promise.resolve(bookmarks);
            })
            .catch(e => {
                this.logger.error('[BOOKMARK DELETE] Failed id :' + id, e);
                throw new InternalServerErrorException(e);
            });

    }

}

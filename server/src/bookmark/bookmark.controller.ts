import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { InputBookmark, Bookmark } from './bookmark.entity';
import { BookmarkService } from './bookmark.service';

@Controller('bookmark')
export class BookmarkController {

  constructor(private readonly bookmarkService: BookmarkService) {}

  @UseGuards(JwtAuthGuard)
  @Post('create') 
  async create_user(@Body() newBookmark: InputBookmark): Promise<Bookmark> {
    return this.bookmarkService.createOne(newBookmark);
  }

  @UseGuards(JwtAuthGuard)
  @Get('owner')
  async get_bookmarks(@Query('owner') owner: string): Promise<Bookmark[]> {
    return this.bookmarkService.findByOwner(owner);
  }

}

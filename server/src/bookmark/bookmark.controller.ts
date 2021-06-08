import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { InputBookmark, Bookmark } from './bookmark.entity';
import { BookmarkService } from './bookmark.service';

@Controller('bookmark')
export class BookmarkController {

  constructor(private readonly bookmarkService: BookmarkService) {}

  @Post('create') 
  async create_user(@Body() newBookmark: InputBookmark): Promise<Bookmark> {
    return this.bookmarkService.createOne(newBookmark);
  }

  @Get('owner')
  async get_bookmarks(@Query('owner') owner: string): Promise<Bookmark[]> {
    return this.bookmarkService.findByOwner(owner);
  }

}

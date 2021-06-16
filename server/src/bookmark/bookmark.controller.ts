import { Body, Controller, Delete, Get, Post, Query, UseGuards } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
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

    this.bookmarkService.findByOwner(owner)
    .then( b => console.log(b));

    return this.bookmarkService.findByOwner(owner);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  async delete_bookmark(@Query('filmId') filmId: number): Promise<DeleteResult> {
    return this.bookmarkService.removeBookmark(filmId);
  }

}

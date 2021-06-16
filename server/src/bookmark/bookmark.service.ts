import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from '../users/users.service';
import { DeleteResult, Repository } from 'typeorm';
import { InputBookmark, Bookmark } from './bookmark.entity';

@Injectable()
export class BookmarkService {

  constructor(
    @InjectRepository(Bookmark)
    private bookmarkRepository: Repository<Bookmark>,
    private userService: UsersService,
  ) {}

  async findAll(): Promise<Bookmark[]> {
    return this.bookmarkRepository.find();
  }

  async findByOwner(owner: string): Promise<Bookmark[]> {
    return this.userService.findOne(owner)
      .then(user => {
        return Bookmark.findByOwner(user.id); 
    });
  }

  async createOne(newBookmark: InputBookmark): Promise<Bookmark> {
    return this.userService.findOne(newBookmark.owner)
      .then(user => {
        return this.bookmarkRepository.save({ 
          name: newBookmark.name,
          owner: user.id,
        });

    });
  }

  async removeBookmark(filmId: number): Promise<DeleteResult> {
    return Bookmark.removeBookmark(filmId);
  }

}



import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
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
    })
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

  async remove(id: string): Promise<void> {
    await this.bookmarkRepository.delete(id);
  }

}



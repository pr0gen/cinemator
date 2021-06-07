import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bookmark } from './bookmark.entity';

@Injectable()
export class BookmarkService {

  constructor(
    @InjectRepository(Bookmark)
    private bookmarkRepository: Repository<Bookmark>,
  ) {}

  async findAll(): Promise<Bookmark[]> {
    return this.bookmarkRepository.find();
  }

  async findByOwner(owner: string): Promise<Bookmark[]> {
    return Bookmark.findByOwner(owner); 
  }

  async createOne(newBookmark: Bookmark): Promise<Bookmark> {
    const bookmark = { 
      id: 1, // TODO not sure of that
      name: newBookmark.name,
      owner: newBookmark.owner,
      date: newBookmark.date,
    };
    return this.bookmarkRepository.save(bookmark);
  }

  async remove(id: string): Promise<void> {
    await this.bookmarkRepository.delete(id);
  }

}



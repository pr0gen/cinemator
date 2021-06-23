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
    ) { }

    public async findAll(): Promise<Bookmark[]> {
        return this.bookmarkRepository.find();
    }

    public async findByOwner(ownerId: number): Promise<Bookmark[]> {
        return Bookmark.findByOwner(ownerId);
    }

    public async createOne(newBookmark: InputBookmark): Promise<Bookmark> {
        return this.bookmarkRepository.save({
            filmId: newBookmark.filmId, // TODO check this
            owner: newBookmark.ownerId,
        });
    }

    public async removeBookmark(id: number, ownerId: number): Promise<DeleteResult> {
        return Bookmark.removeBookmark(id, ownerId);
    }

}



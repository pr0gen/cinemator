import { User } from '../users/user.entity';
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, ManyToOne, DeleteResult } from 'typeorm';

export interface InputBookmark {
    filmId: number;
    ownerId: number;
}

@Entity()
export class Bookmark extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    filmId: number;

    @ManyToOne(type => User, user => user.bookmarks)
    owner: number;

    @Column({ type: 'timestamp' })
    date: Date;

    static findByOwner(owner: number): Promise<Bookmark[]> {
        return this.createQueryBuilder("bookmark")
            .where("bookmark.owner = :owner", { owner: owner })
            .getMany();
    }

    static removeBookmark(id: number, ownerId: number): Promise<DeleteResult> {
        return this.createQueryBuilder("bookmark")
            .delete()
            .where("bookmark.filmId = :id", { id })
            .andWhere("bookmark.ownerId = :ownerId", { ownerId })
            .execute();
    }

    static removeBookmarkForUser(ownerId: number): Promise<DeleteResult> {
        return this.createQueryBuilder("bookmark")
            .delete()
            .where("bookmark.ownerId = :ownerId", { ownerId })
            .execute();
    }
}

import { User } from '../users/user.entity';
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

export interface InputBookmark {
  name: string;
  owner: string;
}

@Entity()
export class Bookmark extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(type => User, user => user.bookmarks)
  owner: number;

  @Column({ type: 'timestamp'})
  date: Date;

  static findByOwner(owner: string): Promise<Bookmark[]> {
        return this.createQueryBuilder("bookmark")
            .where("bookmark.owner = :owner", { owner })
            .getMany()
    }
}

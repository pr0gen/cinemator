import { Bookmark } from '../bookmark/bookmark.entity';
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { UserLike } from 'src/like/like.entity';


export interface InputUser {
    username: string;
    email: string;
    password: string;
}

export class OutputUser {
    id: number;
    username: string;
    email: string;
    token: string;
}

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  isActive: boolean;

  @Column({ type: "timestamp", default: () => "now()" })
  updated_at: Date;

  @Column({ type: 'timestamp', default: () => "now()" })
  created_at: Date;

  @OneToMany(type => Bookmark, bookmark => bookmark.owner) 
  bookmarks: Bookmark[];

  @OneToMany(type => UserLike, like => like.owner) 
  likes: UserLike[];

  static findByName(username: string): Promise<User> {
      return this.createQueryBuilder("user")
          .where("user.username = :username", { username })
          .getOne();
  }
}


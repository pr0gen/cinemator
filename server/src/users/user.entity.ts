import { Bookmark } from 'src/bookmark/bookmark.entity';
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';


export interface InputUser {
    firstName: string;
    lastName: string;
    password: string;
}

export class OutputUser {
    firstName: string;
    lastName: string;
    token: string;
}

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

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


  static findByName(firstName: string): Promise<User> {
        return this.createQueryBuilder("user")
            .where("user.firstName = :firstName", { firstName })
            .getOne();
    }
}


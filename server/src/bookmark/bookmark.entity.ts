import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bookmark extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  owner: string;

  @Column()
  date: string;

  static findByOwner(owner: string): Promise<Bookmark[]> {
        return this.createQueryBuilder("bookmark")
            .where("bookmark.owner = :owner", { owner })
            .getMany()
    }
}

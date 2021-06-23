import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

export interface InputLike {
    ownerId: number;
    filmId: number;
}

@Entity()
export class UserLike extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    filmId: number;

    @ManyToOne(type => User, user => user.likes)
    owner: number;

    @Column({ type: 'timestamp' })
    date: Date;

    public static findByOwner(owner: number): Promise<UserLike[]> {
        return this.createQueryBuilder("user_like")
            .where("user_like.owner = :owner", { owner: owner })
            .getMany();
    }

    public static findByFilmIdAndOwner(ownerId: number, filmId: number): Promise<UserLike> {
        return this.createQueryBuilder("user_like")
            .where("user_like.filmId = :filmId", { filmId: filmId })
            .andWhere("user_like.ownerId = :ownerId", { ownerId: ownerId})
            .getOne();
    }

}


import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { InputLike, UserLike } from './like.entity';

@Injectable()
export class LikeService {

    constructor(
        @InjectRepository(UserLike)
        private userLikeRepository: Repository<UserLike>,
        private userService: UsersService,
    ) { }

    public async findByOwner(owner: string): Promise<UserLike[]> {
        return this.userService.findOne(owner)
            .then(user => {
                return UserLike.findByOwner(user.id);
            });
    }

    public async updateLike(like: InputLike): Promise<boolean> {
        const filmId = like.filmId;
        const userId = like.ownerId;
        return UserLike.findByFilmIdAndOwner(userId, filmId)
            .then(like => {
                if (undefined === like) {
                    return this.createLike(userId, filmId);
                }
                // like is already there, so we remove it
                this.userLikeRepository.remove(like);
                return Promise.resolve(true);
            })
            .catch(_ => this.createLike(userId, filmId));
    }

    private async createLike(userId: number, filmId: number): Promise<boolean> {
        this.userLikeRepository.save({ filmId: filmId, owner: userId });
        return Promise.resolve(false);
    }

}

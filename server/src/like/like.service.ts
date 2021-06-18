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
  ) {}

  public async findByOwner(owner: string): Promise<UserLike[]> {
    return this.userService.findOne(owner)
      .then(user => {
        return UserLike.findByOwner(user.id); 
    });
  }

  public async updateLike(like: InputLike) {
    const filmId = like.filmId;
    this.userService.findOne(like.owner)
      .then(user => {
        UserLike.findByFilmIdAndOwner(user.id, filmId)
            .then(like => this.userLikeRepository.remove(like))
            .catch(_ => this.userLikeRepository.save({filmId: filmId, owner: user.id})) 
    });
  }

}

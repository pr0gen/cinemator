import { CacheInterceptor, CacheTTL, Injectable, UseInterceptors } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { InputUser, ResetPassword, User } from './user.entity';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }


    @UseInterceptors(CacheInterceptor)
    @CacheTTL(30)
    public async findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    public async findOne(username: string): Promise<User> {
        return User.findByName(username);
    }

    public async createOne(inputUser: InputUser): Promise<User> {
        return this.usersRepository.save({
            username: inputUser.username,
            email: inputUser.email,
            password: inputUser.password,
            isActive: false
        });
    }

    public async remove(id: number): Promise<DeleteResult> {
        return this.usersRepository.delete(id);
    }

    public async updatePassword(resetPassword: ResetPassword): Promise<User> {
        return User.findById(resetPassword.id)
            .then(user => {
                return this.usersRepository.save({
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    password: resetPassword.newPassword,
                    isActive: true,
                    createdAt: user.createdAt,
                    updatedAt: new Date()
                })
            });
    }

}

import {CacheInterceptor, CacheTTL, Injectable, UseInterceptors} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InputUser, User } from './user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}


  @UseInterceptors(CacheInterceptor)
  @CacheTTL(30)
  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(username: string): Promise<User> {
    return User.findByName(username); 
  }

  async createOne(inputUser: InputUser): Promise<User> {
    return this.usersRepository.save({ 
      username: inputUser.username,
      email: inputUser.email,
      password: inputUser.password,
      isActive: false
    });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  helloWorld(): string {
    return 'hello world';
  }
}

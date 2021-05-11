import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {

  private readonly users = [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        password: 'changeme',
        isActive: true,
      },
      {
        id: 2,
        firstName: 'Maria',
        lastName: 'Dae',
        password: 'guess',
        isActive: true,
      },
    ];

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async fakeFindOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.firstName === username);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  helloWorld(): string {
    return 'hello world';
  }
}

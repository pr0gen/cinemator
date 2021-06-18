import { Injectable } from '@nestjs/common';
import { User } from '../users/user.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService){}

   public async validateUser(username: string, pass: string): Promise<User> {
    const user = await this.usersService.findOne(username); 
    if (user && user.password === pass) {
      return user;
    }
    return null;
  }

}

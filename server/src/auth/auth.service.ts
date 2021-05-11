import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService){}

   async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.fakeFindOne(username); 
    //const user = await this.usersService.findOne(username); // TODO real auth
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

}

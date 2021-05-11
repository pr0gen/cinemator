import { Body, Controller, Get, Post} from '@nestjs/common';
import { User, InputUser } from './user.entity';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create') 
  async create_user(@Body() userInput: InputUser): Promise<User> {
    return this.usersService.createOne(userInput);
  }

}

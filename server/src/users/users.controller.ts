import { Body, Controller, Delete, Post, Query, UseGuards} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { InputUser } from './user.entity';
import { UsersService } from './users.service';

interface OutputUser {
  id: number; 
  username: string;
  email: string;
  isActive: boolean;
  updated_at:  Date;
  created_at:   Date;
}

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create') 
  public async create_user(@Body() userInput: InputUser): Promise<OutputUser> {
    let user = await this.usersService.createOne(userInput);
    return Promise.resolve(
      {
        id: user.id,
        username: user.username,
        email: user.email,
        isActive: user.isActive,
        updated_at: user.updated_at,
        created_at: user.created_at
    });
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  public async delete_user(@Query('user_id') user_id: number) {
    this.usersService.remove(user_id);
  }

}

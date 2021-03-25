import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('users')

  async getHello(): Promise<string> {
    return this.usersService.helloWorld();
  }
}

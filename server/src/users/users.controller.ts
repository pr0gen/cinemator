import {Controller, Get, Query} from '@nestjs/common';
import { UsersService } from './users.service';
import {SearchResult} from "../imdb/dto";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('users')

  async getHello(): Promise<string> {
    return this.usersService.helloWorld();
  }
}

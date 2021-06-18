import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { OutputUser } from '../users/user.entity';


@Controller('auth')
export class AuthController {

  constructor() {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  public async login(@Request() request): Promise<OutputUser> {
    return request.user;  
  }

}

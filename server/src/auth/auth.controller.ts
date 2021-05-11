import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { OutputUser } from '../users/user.entity';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() request): Promise<OutputUser> {
    return request.user;  
  }

}

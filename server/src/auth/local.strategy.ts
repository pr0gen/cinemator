import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { OutputUser } from 'src/users/user.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<OutputUser> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }

    return { 
      firstName: user.firstName,
      lastName: user.lastName,
      token: this.generate_token()
    };
  }

  //TODO 
  generate_token(): string {
    return "token";
  }
}

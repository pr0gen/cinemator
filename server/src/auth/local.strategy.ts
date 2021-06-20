import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { OutputUser, User } from '../users/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(
        private authService: AuthService,
        private jwtService: JwtService
    ) {
        super();
    }

    async validate(username: string, password: string): Promise<OutputUser> {
        const user = await this.authService.validateUser(username, password);
        if (!user) {
            throw new UnauthorizedException();
        }

        return {
            id: user.id,
            username: user.username,
            email: user.email,
            token: this.generate_token(user)
        };
    }

    generate_token(user: User): string {
        const payload = { username: user.username, sub: user.id };
        return this.jwtService.sign(payload);
    }
}

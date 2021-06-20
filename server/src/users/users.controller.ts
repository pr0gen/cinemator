import { Body, Controller, Delete, Post, Put, Query, UseGuards } from '@nestjs/common';
import { CinematorLogger } from 'src/logger/logger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { InputUser, ResetPassword } from './user.entity';
import { UsersService } from './users.service';

interface OutputUser {
    id: number;
    username: string;
    email: string;
    isActive: boolean;
    updatedAt: Date;
    createdAt: Date;
}

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService,
        private readonly logger: CinematorLogger) { }

    @Post('create')
    public async create_user(@Body() userInput: InputUser): Promise<OutputUser> {
        let user = await this.usersService.createOne(userInput);
        this.logger.log('[CREATE USER]: id: ' + user.id + ' username: ' + userInput.username + ' email: ' + userInput.email);
        return Promise.resolve(
            {
                id: user.id,
                username: user.username,
                email: user.email,
                isActive: user.isActive,
                updatedAt: user.updatedAt,
                createdAt: user.createdAt
            });
    }

    @UseGuards(JwtAuthGuard)
    @Delete()
    public async delete_user(@Query('userId') userId: number) {
        this.usersService.remove(userId);
    }

    @UseGuards(JwtAuthGuard)
    @Put('update/password')
    public async reset_password(@Body() resetPassword: ResetPassword): Promise<OutputUser> {
        return this.usersService.updatePassword(resetPassword)
            .then(user => {
                this.logger.log('[UPDATE USER](PASSWORD): id: ' + user.id + ' username: ' + user.username + ' email: ' + user.email);
                return Promise.resolve(
                    {
                        id: user.id,
                        username: user.username,
                        email: user.email,
                        isActive: user.isActive,
                        updatedAt: user.updatedAt,
                        createdAt: user.createdAt
                    })
            });
    }

}

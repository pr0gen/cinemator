import { Body, Controller, Delete, InternalServerErrorException, Post, Put, Query, UseGuards } from '@nestjs/common';
import { CinematorLogger } from '../logger/logger';
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
        return this.usersService.createOne(userInput)
            .then(user => {
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
            })
            .catch(e => {
                this.logger.log('[CREATE USER]: Failed to create user (username: ' + userInput.username + 'email: ' + userInput.email + ')', e);
                throw new InternalServerErrorException();
            });
    }

    @UseGuards(JwtAuthGuard)
    @Delete()
    public async delete_user(@Query('userId') userId: number): Promise<any> {
        return this.usersService.remove(userId)
            .then(_ => this.logger.log('[DELETE USER]: id: ' + userId))
            .catch(e => {
                this.logger.error('[DELETE USER]: id: ' + userId, e)
                throw new InternalServerErrorException(e, "Something went wrong when deleting")
            });
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

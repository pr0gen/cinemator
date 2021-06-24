import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiAuthService } from './api-auth.service';

@Module({
    imports: [ConfigModule.forRoot()],
    providers: [ApiAuthService]

})
export class ApiAuthModule { }

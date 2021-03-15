import { HttpModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from '../auth/auth.service';
import { ImdbController } from './imdb.controller';
import { ImdbService } from './imdb.service';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [ImdbController],
  providers: [ImdbService, AuthService]
})
export class ImdbModule {}

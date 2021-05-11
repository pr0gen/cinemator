import { HttpModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiAuthService } from 'src/api-auth/api-auth.service';
import { ImdbController } from './imdb.controller';
import { ImdbService } from './imdb.service';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [ImdbController],
  providers: [ImdbService, ApiAuthService]
})
export class ImdbModule {}

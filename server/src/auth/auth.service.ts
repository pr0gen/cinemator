import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Connection } from 'src/imdb/connection';

@Injectable()
export class AuthService {
  private static API_KEY_FIELD = "API_KEY";  

  private connection: Connection;
   
  constructor(
    configService: ConfigService,
  ) {
        this.connection = { api_key : configService.get<string>(AuthService.API_KEY_FIELD)};
    }

  public get_connection(): Connection {
      return this.connection;
  }

}

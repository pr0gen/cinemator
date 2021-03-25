import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Connection } from 'src/imdb/connection';

@Injectable()
export class AuthService {
  private static API_KEY_FIELD_IMDB = "API_KEY_IMDB";  
  private static API_KEY_FIELD_THE_MOVIE_DB = "API_KEY_THE_MOVIE_DB";  

  private connection: Connection;
   
  constructor(
    configService: ConfigService,
  ) {
        this.connection = { 
          api_key_imdb : configService.get<string>(AuthService.API_KEY_FIELD_IMDB),
          api_key_the_movie_db : configService.get<string>(AuthService.API_KEY_FIELD_THE_MOVIE_DB),
      };
    }

  public get_connection(): Connection {
      return this.connection;
  }

}

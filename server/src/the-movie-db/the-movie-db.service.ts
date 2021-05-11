import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios'
import { Connection } from '../imdb/connection';
import * as ApiConstant from './constants';
import { SearchResult } from './dto';
import { ApiAuthService } from 'src/api-auth/api-auth.service';

@Injectable()
export class TheMovieDbService {

    private connection: Connection;
constructor(
    private httpService: HttpService,
    authService: ApiAuthService,
  ) {
        this.connection = authService.get_connection();
    }

    search_by_expression(expression: string): Observable<AxiosResponse<SearchResult>> {
      return this.httpService
        .get(ApiConstant.BASIC_SEARCH + this.connection.api_key_the_movie_db + ApiConstant.QUERY + expression);
    }

}

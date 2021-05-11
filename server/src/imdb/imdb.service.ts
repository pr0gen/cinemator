import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios'
import { SearchResult } from './dto';
import { Connection } from './connection';
import * as ApiConstant from './constants';
import { ApiAuthService } from 'src/auth/api-auth.service';

@Injectable()
export class ImdbService {

    private connection: Connection
constructor(
    private httpService: HttpService,
    authService: ApiAuthService,
  ) {
        this.connection = authService.get_connection();
    }

  search_by_name(name: string): Observable<AxiosResponse<SearchResult>> {
      return this.httpService
        .get(ApiConstant.BASIC_SEARCH + this.connection.api_key_imdb + '/' + name);
  }

  search_all_by_expression(expression: string): Observable<AxiosResponse<SearchResult>> {
      return this.httpService
        .get(ApiConstant.ALL_SEARCH + this.connection.api_key_imdb + '/' + expression);
  }

  // title_search(): Observable<AxiosResponse<>> {
// 
  // }

}

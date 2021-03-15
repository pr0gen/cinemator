import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { SearchResult } from './dto';
import { Connection } from './connection';
import * as ApiConstant from './constants';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class ImdbService {

  private connection: Connection;

  constructor(
    private httpService: HttpService,
    authService: AuthService,
  ) {
    this.connection = authService.get_connection();
  }

  search_by_expression(expression: string): Observable<AxiosResponse<SearchResult>> {
    return this.httpService
      .get(ApiConstant.BASIC_SEARCH + this.connection.api_key + '/' + expression);
  }

}

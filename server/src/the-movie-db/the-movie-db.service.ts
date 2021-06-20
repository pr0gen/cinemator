import { HttpService, Injectable, UseInterceptors, CacheInterceptor, CacheTTL } from '@nestjs/common';
import { Connection } from '../the-movie-db/connection';
import * as ApiConstant from './constants';
import { MovieTranslation, SearchResult, MovieDetails } from './dto';
import { ApiAuthService } from '../api-auth/api-auth.service';
@Injectable()
export class TheMovieDbService {

    private connection: Connection;
    constructor(
        private httpService: HttpService,
        authService: ApiAuthService,
    ) {
        this.connection = authService.get_connection();
    }

    @UseInterceptors(CacheInterceptor)
    @CacheTTL(30)
    async search_by_expression(expression: string): Promise<SearchResult | Error> {
        return this.httpService
            .get(ApiConstant.BASIC_SEARCH + this.connection.api_key_the_movie_db + ApiConstant.QUERY + expression)
            .toPromise()
            .then(res => res.data)
            .catch(err => new Error(err));
    }

    @UseInterceptors(CacheInterceptor)
    @CacheTTL(30)
    async lang_details(id: number): Promise<string[] | Error> {
        return this.httpService
            .get(
                ApiConstant.BASE_LANG_DETAILS + id + '/' + ApiConstant.TRANSLATION +
                ApiConstant.API_KEY_PATH + this.connection.api_key_the_movie_db
            )
            .toPromise()
            .then(res => {
                let data: MovieTranslation = res.data;
                return data.translations.map(t => t.name);
            })
            .catch(err => new Error(err));
    }

    @UseInterceptors(CacheInterceptor)
    @CacheTTL(30)
    async find_movie_details(id: number): Promise<MovieDetails | Error> {
        console.log(ApiConstant.MOVIE_DETAILS + id + '/' + ApiConstant.API_KEY_PATH
            + this.connection.api_key_the_movie_db + ApiConstant.LANG + "en-US");
        return this.httpService
            .get(
                ApiConstant.MOVIE_DETAILS + id + ApiConstant.API_KEY_PATH
                + this.connection.api_key_the_movie_db + ApiConstant.LANG + "en-US"
            )
            .toPromise()
            .then(res => res.data)
            .catch(err => new Error(err));
    }

}

import { Controller, Get, InternalServerErrorException, Query } from '@nestjs/common';
import { CinematorLogger } from '../logger/logger';
import { SearchResult, MovieDetails } from './dto';
import { TheMovieDbService } from './the-movie-db.service';

@Controller('the-movie-db')
export class TheMovieDbController {

    constructor(private readonly theMovieDbService: TheMovieDbService,
        private readonly logger: CinematorLogger) { }

    @Get('search')
    async search_by_expression(@Query('expression') expression: string): Promise<SearchResult> {
        return this.theMovieDbService.search_by_expression(expression)
            .then(result => Promise.resolve(result))
            .catch(e => {
                this.logger.error('[TheMovieDB SEARCH] Failed for expression: ' + expression, e);
                throw new InternalServerErrorException();
            });
    }

    @Get('lang-details')
    async lang_details(@Query('id') id: number): Promise<string[]> {
        return this.theMovieDbService.lang_details(id)
            .then(result => Promise.resolve(result))
            .catch(e => {
                this.logger.error('[TheMovieDB LANG] Failed for film: ' + id, e);
                throw new InternalServerErrorException();
            });
    }

    @Get('find-movie-details')
    async find_movie_details(@Query('id') id: number): Promise<MovieDetails> {
        return this.theMovieDbService.find_movie_details(id)
            .then(result => Promise.resolve(result))
            .catch(e => {
                this.logger.error('[TheMovieDB MOVIE_DETAILS] Failed for film: ' + id, e);
                throw new InternalServerErrorException();
            });
    }

}

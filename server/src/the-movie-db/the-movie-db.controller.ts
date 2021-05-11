import { Controller, Get, Query } from '@nestjs/common';
import { SearchResult, MovieDetails } from './dto';
import { TheMovieDbService } from './the-movie-db.service';

@Controller('the-movie-db')
export class TheMovieDbController {

  constructor(private theMovieDbService: TheMovieDbService) {}

    @Get('search')
    async findOne(@Query('expression') expression: string): Promise<SearchResult | Error> {
        return this.theMovieDbService.search_by_expression(expression);
    }

    @Get('lang-details')
    async lang_details(@Query('id') id: number): Promise<string[] | Error> {
        return this.theMovieDbService.lang_details(id);
    }

    @Get('find-movie-details')
    async find_movie_details(@Query('id') id: number): Promise<MovieDetails | Error> {
        return this.theMovieDbService.find_movie_details(id);
    }

}

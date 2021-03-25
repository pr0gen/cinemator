import { Controller, Get, Query } from '@nestjs/common';
import { SearchResult } from './dto';
import { TheMovieDbService } from './the-movie-db.service';

@Controller('the-movie-db')
export class TheMovieDbController {

  constructor(private theMovieDbService: TheMovieDbService) {}

  @Get('search')
  async findOne(@Query('expression') expression: string): Promise<SearchResult| Error> {
    return this.theMovieDbService.search_by_expression(expression)
      .toPromise()
      .then(res => res.data)
      .catch(err => new Error(err));
  }


}

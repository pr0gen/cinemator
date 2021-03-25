import { Controller, Get, Query } from '@nestjs/common';
import { ImdbService } from './imdb.service';
import { SearchResult } from './dto';

@Controller('imdb')
export class ImdbController {

  constructor(private imdbService: ImdbService) {}

  @Get('search')

  async findOne(@Query('name') name: string): Promise<SearchResult | Error> {
     return this.imdbService.search_by_name(name)
      .toPromise()
      .then(res => res.data)
      .catch(error => new Error(error));
  }

  @Get('search-all')
  async search_all(@Query('expression') expression: string): Promise<SearchResult | Error> {
     return this.imdbService.search_all_by_expression(expression)
      .toPromise()
      .then(res => res.data)
      .catch(error => new Error(error));
  }

}

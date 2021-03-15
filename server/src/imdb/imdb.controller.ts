import { Controller, Get, Query } from '@nestjs/common';
import { ImdbService } from './imdb.service';
import { SearchResult } from './dto';

@Controller('imdb')
export class ImdbController {

  constructor(private imdbService: ImdbService) {}

  @Get('search')
  findOne(@Query('name') name: string): Promise<SearchResult | Error> {
    return this.imdbService
      .search_by_expression(name)
      .toPromise()
      .then(res => res.data)
      .catch(error => new Error(error))
  }

}

import { Controller, Get, Query } from '@nestjs/common';
import { ImdbService } from './imdb.service';

@Controller('imdb')
export class ImdbController {

  constructor(private imdbService: ImdbService) {}

  @Get('search')
  findOne(@Query('name') name: string): any {
     return this.imdbService.search_by_name(name)
      .toPromise()
      .then(res => res.data)
      .catch(error => new Error(error));
  }

  @Get('search-all')
  search_all(@Query('expression') expression: string): any {
     return this.imdbService.search_all_by_expression(expression)
      .toPromise()
      .then(res => res.data)
      .catch(error => new Error(error));
  }

}

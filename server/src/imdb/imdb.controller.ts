import { Controller, Get } from '@nestjs/common';
import { ImdbService } from './imdb.service';

@Controller('imdb')
export class ImdbController {

  constructor(private imdbService: ImdbService) {}

  @Get('search')
  findOne(): any {
     return this.imdbService.search_by_expression('Inception 2010')
      .toPromise()
      .then(res => res.data)
      .catch(error => new Error(error));
  }

}

import { Controller, Get } from '@nestjs/common';

@Controller('coffies')
export class CoffiesController {
  @Get()
  findAllCoffies() {
    return 'This action returns all the coffies';
  }

  @Get('flavors')
  findAllFlavors() {
    return 'This action returns all the coffies flavors';
  }
}

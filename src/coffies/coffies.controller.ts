import { Controller, Get, Param } from '@nestjs/common';

@Controller('coffies')
export class CoffiesController {
  // access directly route /coffies
  @Get()
  findAllCoffies() {
    return 'This action returns all the coffies';
  }

  // access directly route /coffies/flavors
  @Get('flavors')
  findAllFlavors() {
    return 'This action returns all the coffies flavors';
  }

  // access directly route /coffies/flavors/<id>
  // if you need get a bunch of params use @Param() params: any
  // if you need get one param use @Param('<name-param>') <name-param>: <type>
  @Get('flavors/:flavor')
  findOneFlavors(@Param('flavor') flavor: string) {
    return `This action returns coffies flavors: ${flavor}`;
  }
}

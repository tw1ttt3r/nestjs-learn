import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('coffies')
export class CoffiesController {
  // access directly route /coffies
  @Get()
  findAllCoffies() {
    return 'This action returns all the coffies';
  }
  // access directly route /coffies with verb post
  // if you wanna use only one property use @Body('<property-name>') body:<type>
  // or use destructuring @Body() { <property-name> }: <type>
  @Post()
  postInformationCoffie(@Body() body: any) {
    return body;
  }

  // access directly route /coffies/flavors
  @Get('flavors')
  findAllFlavors() {
    return 'This action returns all the coffies flavors';
  }

  // access directly route /coffies/flavors/<flavor>
  // if you need get a bunch of params use @Param() params: any
  // if you need get one param use @Param('<name-param>') <name-param>: <type>
  @Get('flavors/:flavor')
  findOneFlavors(@Param('flavor') flavor: string) {
    return `This action returns coffies flavors: ${flavor}`;
  }

  // access directly route /coffies/flavors/<flavor> with verb patch
  @Patch('flavors/:flavor')
  updateFlavor(@Param('flavor') flavor: string, @Body() body: any) {
    return `The flavor ${flavor} is updated with this data: ${JSON.stringify(body)}`;
  }

  // access directly route /coffies/flavors/<flavor> with verb delete
  @Delete('flavors/:flavor')
  deleteFlavor(@Param('flavor') flavor: string) {
    return `Flavor ${flavor} is not available`;
  }
}

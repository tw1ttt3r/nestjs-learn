import { Test, TestingModule } from '@nestjs/testing';
import { CoffiesController } from './coffies.controller';

describe('CoffiesController', () => {
  let controller: CoffiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoffiesController],
    }).compile();

    controller = module.get<CoffiesController>(CoffiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

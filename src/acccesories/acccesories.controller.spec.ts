import { Test, TestingModule } from '@nestjs/testing';
import { AcccesoriesController } from './acccesories.controller';
import { AcccesoriesService } from './acccesories.service';

describe('AcccesoriesController', () => {
  let controller: AcccesoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AcccesoriesController],
      providers: [AcccesoriesService],
    }).compile();

    controller = module.get<AcccesoriesController>(AcccesoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { AcccesoriesService } from './acccesories.service';

describe('AcccesoriesService', () => {
  let service: AcccesoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AcccesoriesService],
    }).compile();

    service = module.get<AcccesoriesService>(AcccesoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

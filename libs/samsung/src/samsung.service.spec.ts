import { Test, TestingModule } from '@nestjs/testing';
import { SamsungService } from './samsung.service';

describe('SamsungService', () => {
  let service: SamsungService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SamsungService],
    }).compile();

    service = module.get<SamsungService>(SamsungService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

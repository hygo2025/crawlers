import { Test, TestingModule } from '@nestjs/testing';
import { XiaomiService } from './xiaomi.service';

describe('XiaomiService', () => {
  let service: XiaomiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [XiaomiService],
    }).compile();

    service = module.get<XiaomiService>(XiaomiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

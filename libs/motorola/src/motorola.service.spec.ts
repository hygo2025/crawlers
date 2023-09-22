import { Test, TestingModule } from '@nestjs/testing';
import { MotorolaService } from './motorola.service';

describe('MotorolaService', () => {
  let service: MotorolaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MotorolaService],
    }).compile();

    service = module.get<MotorolaService>(MotorolaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

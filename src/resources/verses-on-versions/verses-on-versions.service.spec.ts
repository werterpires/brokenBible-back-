import { Test, TestingModule } from '@nestjs/testing';
import { VersesOnVersionsService } from './verses-on-versions.service';

describe('VersesOnVersionsService', () => {
  let service: VersesOnVersionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VersesOnVersionsService],
    }).compile();

    service = module.get<VersesOnVersionsService>(VersesOnVersionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

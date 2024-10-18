import { Test, TestingModule } from '@nestjs/testing';
import { OriginalsOnVersesService } from './originals-on-verses.service';

describe('OriginalsOnVersesService', () => {
  let service: OriginalsOnVersesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OriginalsOnVersesService],
    }).compile();

    service = module.get<OriginalsOnVersesService>(OriginalsOnVersesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

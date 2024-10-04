import { Test, TestingModule } from '@nestjs/testing';
import { PropositionsOnVersesService } from './propositions-on-verses.service';

describe('PropositionsOnVersesService', () => {
  let service: PropositionsOnVersesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PropositionsOnVersesService],
    }).compile();

    service = module.get<PropositionsOnVersesService>(PropositionsOnVersesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { ThemesOnPropositionsService } from './themes-on-propositions.service';

describe('ThemesOnPropositionsService', () => {
  let service: ThemesOnPropositionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThemesOnPropositionsService],
    }).compile();

    service = module.get<ThemesOnPropositionsService>(ThemesOnPropositionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

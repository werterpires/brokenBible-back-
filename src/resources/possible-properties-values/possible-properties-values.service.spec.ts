import { Test, TestingModule } from '@nestjs/testing';
import { PossiblePropertiesValuesService } from './possible-properties-values.service';

describe('PossiblePropertiesValuesService', () => {
  let service: PossiblePropertiesValuesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PossiblePropertiesValuesService],
    }).compile();

    service = module.get<PossiblePropertiesValuesService>(PossiblePropertiesValuesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

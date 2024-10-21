import { Test, TestingModule } from '@nestjs/testing';
import { PossiblePropertiesValuesController } from './possible-properties-values.controller';
import { PossiblePropertiesValuesService } from './possible-properties-values.service';

describe('PossiblePropertiesValuesController', () => {
  let controller: PossiblePropertiesValuesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PossiblePropertiesValuesController],
      providers: [PossiblePropertiesValuesService],
    }).compile();

    controller = module.get<PossiblePropertiesValuesController>(PossiblePropertiesValuesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

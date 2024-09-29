import { Test, TestingModule } from '@nestjs/testing';
import { PropositionsController } from './propositions.controller';
import { PropositionsService } from './propositions.service';

describe('PropositionsController', () => {
  let controller: PropositionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PropositionsController],
      providers: [PropositionsService],
    }).compile();

    controller = module.get<PropositionsController>(PropositionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

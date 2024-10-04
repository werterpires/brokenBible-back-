import { Test, TestingModule } from '@nestjs/testing';
import { PropositionsOnVersesController } from './propositions-on-verses.controller';
import { PropositionsOnVersesService } from './propositions-on-verses.service';

describe('PropositionsOnVersesController', () => {
  let controller: PropositionsOnVersesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PropositionsOnVersesController],
      providers: [PropositionsOnVersesService],
    }).compile();

    controller = module.get<PropositionsOnVersesController>(PropositionsOnVersesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

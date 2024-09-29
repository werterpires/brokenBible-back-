import { Test, TestingModule } from '@nestjs/testing';
import { ThemesOnPropositionsController } from './themes-on-propositions.controller';
import { ThemesOnPropositionsService } from './themes-on-propositions.service';

describe('ThemesOnPropositionsController', () => {
  let controller: ThemesOnPropositionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThemesOnPropositionsController],
      providers: [ThemesOnPropositionsService],
    }).compile();

    controller = module.get<ThemesOnPropositionsController>(ThemesOnPropositionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

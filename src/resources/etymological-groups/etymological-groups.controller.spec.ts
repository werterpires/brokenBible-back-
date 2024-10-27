import { Test, TestingModule } from '@nestjs/testing';
import { EtymologicalGroupsController } from './etymological-groups.controller';
import { EtymologicalGroupsService } from './etymological-groups.service';

describe('EtymologicalGroupsController', () => {
  let controller: EtymologicalGroupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EtymologicalGroupsController],
      providers: [EtymologicalGroupsService],
    }).compile();

    controller = module.get<EtymologicalGroupsController>(EtymologicalGroupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

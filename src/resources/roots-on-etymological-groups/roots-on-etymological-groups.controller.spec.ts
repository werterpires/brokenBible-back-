import { Test, TestingModule } from '@nestjs/testing';
import { RootsOnEtymologicalGroupsController } from './roots-on-etymological-groups.controller';
import { RootsOnEtymologicalGroupsService } from './roots-on-etymological-groups.service';

describe('RootsOnEtymologicalGroupsController', () => {
  let controller: RootsOnEtymologicalGroupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RootsOnEtymologicalGroupsController],
      providers: [RootsOnEtymologicalGroupsService],
    }).compile();

    controller = module.get<RootsOnEtymologicalGroupsController>(RootsOnEtymologicalGroupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

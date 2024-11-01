import { Test, TestingModule } from '@nestjs/testing';
import { RootsOnEtymologicalGroupsService } from './roots-on-etymological-groups.service';

describe('RootsOnEtymologicalGroupsService', () => {
  let service: RootsOnEtymologicalGroupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RootsOnEtymologicalGroupsService],
    }).compile();

    service = module.get<RootsOnEtymologicalGroupsService>(RootsOnEtymologicalGroupsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { EtymologicalGroupsService } from './etymological-groups.service';

describe('EtymologicalGroupsService', () => {
  let service: EtymologicalGroupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EtymologicalGroupsService],
    }).compile();

    service = module.get<EtymologicalGroupsService>(EtymologicalGroupsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { VersesOnVersionsController } from './verses-on-versions.controller';
import { VersesOnVersionsService } from './verses-on-versions.service';

describe('VersesOnVersionsController', () => {
  let controller: VersesOnVersionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VersesOnVersionsController],
      providers: [VersesOnVersionsService],
    }).compile();

    controller = module.get<VersesOnVersionsController>(VersesOnVersionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

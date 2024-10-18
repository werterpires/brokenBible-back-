import { Test, TestingModule } from '@nestjs/testing';
import { OriginalsOnVersesController } from './originals-on-verses.controller';
import { OriginalsOnVersesService } from './originals-on-verses.service';

describe('OriginalsOnVersesController', () => {
  let controller: OriginalsOnVersesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OriginalsOnVersesController],
      providers: [OriginalsOnVersesService],
    }).compile();

    controller = module.get<OriginalsOnVersesController>(OriginalsOnVersesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

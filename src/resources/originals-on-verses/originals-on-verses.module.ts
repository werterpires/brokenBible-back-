import { Module } from '@nestjs/common';
import { OriginalsOnVersesService } from './originals-on-verses.service';
import { OriginalsOnVersesController } from './originals-on-verses.controller';

@Module({
  controllers: [OriginalsOnVersesController],
  providers: [OriginalsOnVersesService],
})
export class OriginalsOnVersesModule {}

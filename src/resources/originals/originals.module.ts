import { Module } from '@nestjs/common';
import { OriginalsService } from './originals.service';
import { OriginalsController } from './originals.controller';

@Module({
  controllers: [OriginalsController],
  providers: [OriginalsService],
})
export class OriginalsModule {}

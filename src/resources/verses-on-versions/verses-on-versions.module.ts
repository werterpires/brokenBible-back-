import { Module } from '@nestjs/common';
import { VersesOnVersionsService } from './verses-on-versions.service';
import { VersesOnVersionsController } from './verses-on-versions.controller';

@Module({
  controllers: [VersesOnVersionsController],
  providers: [VersesOnVersionsService],
})
export class VersesOnVersionsModule {}

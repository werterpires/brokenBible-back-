import { Module } from '@nestjs/common';
import { EtymologicalGroupsService } from './etymological-groups.service';
import { EtymologicalGroupsController } from './etymological-groups.controller';

@Module({
  controllers: [EtymologicalGroupsController],
  providers: [EtymologicalGroupsService],
})
export class EtymologicalGroupsModule {}

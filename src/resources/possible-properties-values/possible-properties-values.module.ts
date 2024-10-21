import { Module } from '@nestjs/common';
import { PossiblePropertiesValuesService } from './possible-properties-values.service';
import { PossiblePropertiesValuesController } from './possible-properties-values.controller';

@Module({
  controllers: [PossiblePropertiesValuesController],
  providers: [PossiblePropertiesValuesService],
})
export class PossiblePropertiesValuesModule {}

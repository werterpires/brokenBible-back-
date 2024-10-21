import { PartialType } from '@nestjs/mapped-types';
import { CreatePossiblePropertiesValueDto } from './create-possible-properties-value.dto';

export class UpdatePossiblePropertiesValueDto extends PartialType(CreatePossiblePropertiesValueDto) {}

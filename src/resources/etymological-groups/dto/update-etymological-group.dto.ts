import { PartialType } from '@nestjs/mapped-types';
import { CreateEtymologicalGroupDto } from './create-etymological-group.dto';

export class UpdateEtymologicalGroupDto extends PartialType(CreateEtymologicalGroupDto) {}

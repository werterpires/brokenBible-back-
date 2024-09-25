import { PartialType } from '@nestjs/mapped-types';
import { CreateVersesOnVersionDto } from './create-verses-on-version.dto';

export class UpdateVersesOnVersionDto extends PartialType(CreateVersesOnVersionDto) {}

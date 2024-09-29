import { PartialType } from '@nestjs/mapped-types';
import { CreateThemesOnPropositionDto } from './create-themes-on-proposition.dto';

export class UpdateThemesOnPropositionDto extends PartialType(CreateThemesOnPropositionDto) {}

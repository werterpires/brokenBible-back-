import { PartialType } from '@nestjs/mapped-types';
import { CreateMorphologicalAnalysisDto } from './create-morphological-analysis.dto';

export class UpdateMorphologicalAnalysisDto extends PartialType(CreateMorphologicalAnalysisDto) {}

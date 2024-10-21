import { PartialType } from '@nestjs/mapped-types';
import { CreateMorphologicalAnalysisOnOriginalDto } from './create-morphological-analysis-on-original.dto';

export class UpdateMorphologicalAnalysisOnOriginalDto extends PartialType(CreateMorphologicalAnalysisOnOriginalDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateValuesOnMorphologicalAnalysisDto } from './create-values-on-morphological-analysis.dto';

export class UpdateValuesOnMorphologicalAnalysisDto extends PartialType(CreateValuesOnMorphologicalAnalysisDto) {}

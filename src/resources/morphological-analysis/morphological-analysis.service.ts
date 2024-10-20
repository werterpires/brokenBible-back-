import { Injectable } from '@nestjs/common';
import { CreateMorphologicalAnalysisDto } from './dto/create-morphological-analysis.dto';
import { UpdateMorphologicalAnalysisDto } from './dto/update-morphological-analysis.dto';

@Injectable()
export class MorphologicalAnalysisService {
  create(createMorphologicalAnalysisDto: CreateMorphologicalAnalysisDto) {
    return 'This action adds a new morphologicalAnalysis';
  }

  findAll() {
    return `This action returns all morphologicalAnalysis`;
  }

  findOne(id: number) {
    return `This action returns a #${id} morphologicalAnalysis`;
  }

  update(id: number, updateMorphologicalAnalysisDto: UpdateMorphologicalAnalysisDto) {
    return `This action updates a #${id} morphologicalAnalysis`;
  }

  remove(id: number) {
    return `This action removes a #${id} morphologicalAnalysis`;
  }
}

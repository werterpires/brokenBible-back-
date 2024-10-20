import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MorphologicalAnalysisService } from './morphological-analysis.service';
import { CreateMorphologicalAnalysisDto } from './dto/create-morphological-analysis.dto';
import { UpdateMorphologicalAnalysisDto } from './dto/update-morphological-analysis.dto';

@Controller('morphological-analysis')
export class MorphologicalAnalysisController {
  constructor(private readonly morphologicalAnalysisService: MorphologicalAnalysisService) {}

  @Post()
  create(@Body() createMorphologicalAnalysisDto: CreateMorphologicalAnalysisDto) {
    return this.morphologicalAnalysisService.create(createMorphologicalAnalysisDto);
  }

  @Get()
  findAll() {
    return this.morphologicalAnalysisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.morphologicalAnalysisService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMorphologicalAnalysisDto: UpdateMorphologicalAnalysisDto) {
    return this.morphologicalAnalysisService.update(+id, updateMorphologicalAnalysisDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.morphologicalAnalysisService.remove(+id);
  }
}

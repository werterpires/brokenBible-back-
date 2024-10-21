import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PossiblePropertiesValuesService } from './possible-properties-values.service';
import { CreatePossiblePropertiesValueDto } from './dto/create-possible-properties-value.dto';
import { UpdatePossiblePropertiesValueDto } from './dto/update-possible-properties-value.dto';

@Controller('possible-properties-values')
export class PossiblePropertiesValuesController {
  constructor(private readonly possiblePropertiesValuesService: PossiblePropertiesValuesService) {}

  @Post()
  create(@Body() createPossiblePropertiesValueDto: CreatePossiblePropertiesValueDto) {
    return this.possiblePropertiesValuesService.create(createPossiblePropertiesValueDto);
  }

  @Get()
  findAll() {
    return this.possiblePropertiesValuesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.possiblePropertiesValuesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePossiblePropertiesValueDto: UpdatePossiblePropertiesValueDto) {
    return this.possiblePropertiesValuesService.update(+id, updatePossiblePropertiesValueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.possiblePropertiesValuesService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EtymologicalGroupsService } from './etymological-groups.service';
import { CreateEtymologicalGroupDto } from './dto/create-etymological-group.dto';
import { UpdateEtymologicalGroupDto } from './dto/update-etymological-group.dto';

@Controller('etymological-groups')
export class EtymologicalGroupsController {
  constructor(private readonly etymologicalGroupsService: EtymologicalGroupsService) {}

  @Post()
  create(@Body() createEtymologicalGroupDto: CreateEtymologicalGroupDto) {
    return this.etymologicalGroupsService.create(createEtymologicalGroupDto);
  }

  @Get()
  findAll() {
    return this.etymologicalGroupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.etymologicalGroupsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEtymologicalGroupDto: UpdateEtymologicalGroupDto) {
    return this.etymologicalGroupsService.update(+id, updateEtymologicalGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.etymologicalGroupsService.remove(+id);
  }
}

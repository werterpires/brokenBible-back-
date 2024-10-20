import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RootsService } from './roots.service';
import { CreateRootDto } from './dto/create-root.dto';
import { UpdateRootDto } from './dto/update-root.dto';

@Controller('roots')
export class RootsController {
  constructor(private readonly rootsService: RootsService) {}

  @Post()
  create(@Body() createRootDto: CreateRootDto) {
    return this.rootsService.create(createRootDto);
  }

  @Get()
  findAll() {
    return this.rootsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rootsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRootDto: UpdateRootDto) {
    return this.rootsService.update(+id, updateRootDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rootsService.remove(+id);
  }
}

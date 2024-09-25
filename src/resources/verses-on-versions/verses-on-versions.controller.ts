import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VersesOnVersionsService } from './verses-on-versions.service';
import { CreateVersesOnVersionDto } from './dto/create-verses-on-version.dto';
import { UpdateVersesOnVersionDto } from './dto/update-verses-on-version.dto';

@Controller('verses-on-versions')
export class VersesOnVersionsController {
  constructor(private readonly versesOnVersionsService: VersesOnVersionsService) {}

  @Post()
  create(@Body() createVersesOnVersionDto: CreateVersesOnVersionDto) {
    return this.versesOnVersionsService.create(createVersesOnVersionDto);
  }

  @Get()
  findAll() {
    return this.versesOnVersionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.versesOnVersionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVersesOnVersionDto: UpdateVersesOnVersionDto) {
    return this.versesOnVersionsService.update(+id, updateVersesOnVersionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.versesOnVersionsService.remove(+id);
  }
}

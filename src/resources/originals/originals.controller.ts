import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OriginalsService } from './originals.service';
import { CreateOriginalDto } from './dto/create-original.dto';
import { UpdateOriginalDto } from './dto/update-original.dto';

@Controller('originals')
export class OriginalsController {
  constructor(private readonly originalsService: OriginalsService) {}

  @Post()
  create(@Body() createOriginalDto: CreateOriginalDto) {
    return this.originalsService.create(createOriginalDto);
  }

  @Get()
  findAll() {
    return this.originalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.originalsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOriginalDto: UpdateOriginalDto) {
    return this.originalsService.update(+id, updateOriginalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.originalsService.remove(+id);
  }
}

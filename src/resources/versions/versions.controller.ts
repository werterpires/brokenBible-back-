import { Controller, Post, Body, Get, Param } from '@nestjs/common'
import { VersionsService } from './versions.service'
import { CreateVersionDto } from './dto/create-version.dto'

@Controller('versions')
export class VersionsController {
  constructor(private readonly versionsService: VersionsService) {}

  @Post()
  async createVersion(@Body() createVersionDto: CreateVersionDto) {
    return await this.versionsService.createVersion(createVersionDto)
  }

  @Get(':orderBy')
  async findAllVersions(@Param('orderBy') orderBy: string) {
    return await this.versionsService.findAllVersions(orderBy)
  }
}

import { Injectable } from '@nestjs/common'
import { CreateVersionDto } from './dto/create-version.dto'
import { VersionsRepo } from './versions.repo'
import { Version } from './types'

@Injectable()
export class VersionsService {
  constructor(private readonly versionsRepo: VersionsRepo) {}

  async createVersion(createVersionDto: CreateVersionDto): Promise<Version> {
    const versionId = await this.versionsRepo.createVersion(createVersionDto)
    const version = await this.versionsRepo.findVersionById(versionId)
    return version
  }

  async findAllVersions(orderBy: string): Promise<Version[]> {
    const versions = await this.versionsRepo.findAllVersions(orderBy)
    return versions
  }
}

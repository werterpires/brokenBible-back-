import { Injectable } from '@nestjs/common'
import { InjectConnection } from 'nest-knexjs'
import { CreateVersion, Version } from './types'

@Injectable()
export class VersionsRepo {
  constructor(@InjectConnection() private readonly knex) {}

  async createVersion(verseData: CreateVersion) {
    const { versionAbbr, versionName } = verseData

    const [versionId] = await this.knex('versions').insert({
      version_abbr: versionAbbr,
      version_name: versionName
    })

    return versionId
  }

  async findAllVersions(orderBy: string): Promise<Version[]> {
    const versionsConsult = await this.knex('versions').orderBy(orderBy)

    const versions: Version[] = versionsConsult.map((verse) => {
      return <Version>{
        versionId: verse.verse_id,
        versionAbbr: verse.version_abbr,
        versionName: verse.version_name
      }
    })

    return versions
  }

  async findVersionById(versionId: number): Promise<Version> {
    const versionConsult = await this.knex('versions')
      .first('*')
      .where('version_id', versionId)

    const verse: Version = {
      versionId: versionConsult.version_id,
      versionAbbr: versionConsult.version_abbr,
      versionName: versionConsult.version_name
    }

    return verse
  }
}

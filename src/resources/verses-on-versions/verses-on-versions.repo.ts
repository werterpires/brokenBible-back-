import { Injectable } from '@nestjs/common'
import { InjectConnection } from 'nest-knexjs'
import { VerseOnVersion } from './types'
import { Version } from '../versions/types'

@Injectable()
export class VersesOnVersionsRepo {
  constructor(@InjectConnection() private readonly knex) {}

  async findAllVersesOnVersionsByVerseId(
    verseId: number,
    orderBy: string
  ): Promise<VerseOnVersion[]> {
    const verseOnVersionsConsult = await this.knex('verses_on_versions')
      .leftJoin(
        'versions',
        'verses_on_versions.version_id',
        'versions.version_id'
      )
      .where('verse_id', verseId)
      .orderBy(orderBy)

    const verseOnVersions: VerseOnVersion[] = verseOnVersionsConsult.map(
      (verseOnversion) => {
        const version: Version = {
          versionAbbr: verseOnversion.version_abbr,
          versionId: verseOnversion.version_id,
          versionName: verseOnversion.version_name
        }
        return <VerseOnVersion>{
          verseId: verseOnversion.verse_id,
          versionId: verseOnversion.version_id,
          verseText: verseOnversion.verse_text,
          verseOnVersionId: verseOnversion.verse_on_version_id,
          version
        }
      }
    )

    return verseOnVersions
  }
}

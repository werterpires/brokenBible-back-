import { Injectable } from '@nestjs/common'
import { InjectConnection } from 'nest-knexjs'
import { RootOnEtymologicalGroup } from './types'
import { EtymologicalGroup } from '../etymological-groups/types'

@Injectable()
export class RootsOnEtymologicalGroupsRepo {
  constructor(@InjectConnection() private readonly knex) {}

  async findAllRootsOnEtymologicalGroupsByRootId(
    rootId: number,
    orderBy: string
  ): Promise<RootOnEtymologicalGroup[]> {
    const rootOnEtymGroupConsult = await this.knex(
      'roots_on_etymological_groups'
    )
      .leftJoin(
        'etymological_groups',
        'roots_on_etymological_groups.etym_group_id',
        'etymological_groups.etym_group_id'
      )
      .where('root_id', rootId)
      .orderBy(orderBy)

    const rootOnEtymologicalGroups: RootOnEtymologicalGroup[] =
      rootOnEtymGroupConsult.map((group) => {
        const etymGroup: EtymologicalGroup = {
          etymGroupId: group.etym_group_id,
          etymGroupName: group.etym_group_name,
          etymGroupDescription: group.etym_group_description,
          groupRoot: group.group_root
        }

        return <RootOnEtymologicalGroup>{
          etymGroupId: group.etym_group_id,
          rootId: group.root_id,
          etymGroup
        }
      })

    return rootOnEtymologicalGroups
  }
}

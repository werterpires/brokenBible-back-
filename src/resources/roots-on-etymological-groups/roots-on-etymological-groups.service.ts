import { Injectable } from '@nestjs/common'
import { RootsOnEtymologicalGroupsRepo } from './roots-on-etymological-groups.repo'
import { RootOnEtymologicalGroup } from './types'

@Injectable()
export class RootsOnEtymologicalGroupsService {
  constructor(
    private readonly rootsOnEtymologicalGroupsRepo: RootsOnEtymologicalGroupsRepo
  ) {}

  async findAllRootOnEtymologicalGroupsByRootId(
    rootId: number,
    orderBy: string
  ): Promise<RootOnEtymologicalGroup[]> {
    return this.rootsOnEtymologicalGroupsRepo.findAllRootsOnEtymologicalGroupsByRootId(
      rootId,
      orderBy
    )
  }
}

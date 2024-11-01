import { RootOnEtymologicalGroup } from '../roots-on-etymological-groups/types'

export interface EtymologicalGroup {
  etymGroupId: number
  etymGroupName: string
  etymGroupDescription: string
  groupRoot: string
  rootsOnEtymGroup?: RootOnEtymologicalGroup[]
}

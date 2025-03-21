export interface CreateVersion {
  versionName: string
  versionAbbr: string
}

export interface Version extends CreateVersion {
  versionId: number
}

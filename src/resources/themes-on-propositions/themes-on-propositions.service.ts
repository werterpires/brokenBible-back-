import { Injectable } from '@nestjs/common'
import { ThemesOnPropositionsRepo } from './themes-on-propositions.repo'
import { ThemeOnProposition } from './types'

@Injectable()
export class ThemesOnPropositionsService {
  constructor(
    private readonly themesOnPropositionsRepo: ThemesOnPropositionsRepo
  ) {}

  async createThemeOnProposition(CreateThemesOnPropositionDto) {
    return this.themesOnPropositionsRepo.createThemesOnProposition(
      CreateThemesOnPropositionDto
    )
  }

  async findAllThemesOnPropositionByPropositionId(
    propositionId: number,
    orderBy: string
  ): Promise<ThemeOnProposition[]> {
    return this.themesOnPropositionsRepo.findAllThemesOnPropositionByPropositionId(
      propositionId,
      orderBy
    )
  }
}

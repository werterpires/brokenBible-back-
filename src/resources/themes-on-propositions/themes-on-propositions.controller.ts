import { Controller, Get, Param } from '@nestjs/common'
import { ThemesOnPropositionsService } from './themes-on-propositions.service'
import { ThemeOnProposition } from './types'

@Controller('themes-on-propositions')
export class ThemesOnPropositionsController {
  constructor(
    private readonly themesOnPropositionsService: ThemesOnPropositionsService
  ) {}

  @Get('proposition/:propositionId/:orderBy')
  async findAllThemesOnPropositionByPropositionId(
    @Param('propositionId') propositionId: number,
    @Param('orderBy') orderBy: string
  ): Promise<ThemeOnProposition[]> {
    return this.themesOnPropositionsService.findAllThemesOnPropositionByPropositionId(
      propositionId,
      orderBy
    )
  }
}

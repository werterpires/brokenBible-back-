import { Body, Controller, Post } from '@nestjs/common'
import { PropositionsService } from './propositions.service'
import { CreatePropositionDto } from './dto/create-proposition.dto'
import { Proposition } from './types'

@Controller('propositions')
export class PropositionsController {
  constructor(private readonly propositionsService: PropositionsService) {}

  @Post()
  async createProposition(
    @Body() createPropositionDto: CreatePropositionDto
  ): Promise<Proposition> {
    return await this.propositionsService.createProposition(
      createPropositionDto
    )
  }
}

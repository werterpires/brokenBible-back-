import { Injectable } from '@nestjs/common'

import { PropositionsRepo } from './propositions.repo'
import { CreatePropositionDto } from './dto/create-proposition.dto'

@Injectable()
export class PropositionsService {
  constructor(private readonly propositionsRepo: PropositionsRepo) {}

  async createProposition(createPropositionDto: CreatePropositionDto) {
    const propositionId =
      await this.propositionsRepo.createProposition(createPropositionDto)

    const proposition =
      await this.propositionsRepo.findPropositionById(propositionId)

    return proposition
  }
}

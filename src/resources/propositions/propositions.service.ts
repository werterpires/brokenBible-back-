import { Injectable } from '@nestjs/common'

import { PropositionsRepo } from './propositions.repo'

@Injectable()
export class PropositionsService {
  constructor(private readonly propositionsRepo: PropositionsRepo) {}
}

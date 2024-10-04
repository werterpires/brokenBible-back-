import { Controller } from '@nestjs/common'
import { PropositionsService } from './propositions.service'

@Controller('propositions')
export class PropositionsController {
  constructor(private readonly propositionsService: PropositionsService) {}
}

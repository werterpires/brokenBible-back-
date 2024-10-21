import { Injectable } from '@nestjs/common';
import { CreatePossiblePropertiesValueDto } from './dto/create-possible-properties-value.dto';
import { UpdatePossiblePropertiesValueDto } from './dto/update-possible-properties-value.dto';

@Injectable()
export class PossiblePropertiesValuesService {
  create(createPossiblePropertiesValueDto: CreatePossiblePropertiesValueDto) {
    return 'This action adds a new possiblePropertiesValue';
  }

  findAll() {
    return `This action returns all possiblePropertiesValues`;
  }

  findOne(id: number) {
    return `This action returns a #${id} possiblePropertiesValue`;
  }

  update(id: number, updatePossiblePropertiesValueDto: UpdatePossiblePropertiesValueDto) {
    return `This action updates a #${id} possiblePropertiesValue`;
  }

  remove(id: number) {
    return `This action removes a #${id} possiblePropertiesValue`;
  }
}

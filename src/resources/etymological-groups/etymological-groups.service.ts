import { Injectable } from '@nestjs/common';
import { CreateEtymologicalGroupDto } from './dto/create-etymological-group.dto';
import { UpdateEtymologicalGroupDto } from './dto/update-etymological-group.dto';

@Injectable()
export class EtymologicalGroupsService {
  create(createEtymologicalGroupDto: CreateEtymologicalGroupDto) {
    return 'This action adds a new etymologicalGroup';
  }

  findAll() {
    return `This action returns all etymologicalGroups`;
  }

  findOne(id: number) {
    return `This action returns a #${id} etymologicalGroup`;
  }

  update(id: number, updateEtymologicalGroupDto: UpdateEtymologicalGroupDto) {
    return `This action updates a #${id} etymologicalGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} etymologicalGroup`;
  }
}

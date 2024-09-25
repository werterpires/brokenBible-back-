import { Injectable } from '@nestjs/common';
import { CreateVersesOnVersionDto } from './dto/create-verses-on-version.dto';
import { UpdateVersesOnVersionDto } from './dto/update-verses-on-version.dto';

@Injectable()
export class VersesOnVersionsService {
  create(createVersesOnVersionDto: CreateVersesOnVersionDto) {
    return 'This action adds a new versesOnVersion';
  }

  findAll() {
    return `This action returns all versesOnVersions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} versesOnVersion`;
  }

  update(id: number, updateVersesOnVersionDto: UpdateVersesOnVersionDto) {
    return `This action updates a #${id} versesOnVersion`;
  }

  remove(id: number) {
    return `This action removes a #${id} versesOnVersion`;
  }
}

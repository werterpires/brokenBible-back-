import { Injectable } from '@nestjs/common';
import { CreateOriginalDto } from './dto/create-original.dto';
import { UpdateOriginalDto } from './dto/update-original.dto';

@Injectable()
export class OriginalsService {
  create(createOriginalDto: CreateOriginalDto) {
    return 'This action adds a new original';
  }

  findAll() {
    return `This action returns all originals`;
  }

  findOne(id: number) {
    return `This action returns a #${id} original`;
  }

  update(id: number, updateOriginalDto: UpdateOriginalDto) {
    return `This action updates a #${id} original`;
  }

  remove(id: number) {
    return `This action removes a #${id} original`;
  }
}

import { PartialType } from '@nestjs/mapped-types';
import { CreateOriginalsOnVerseDto } from './create-originals-on-verse.dto';

export class UpdateOriginalsOnVerseDto extends PartialType(CreateOriginalsOnVerseDto) {}

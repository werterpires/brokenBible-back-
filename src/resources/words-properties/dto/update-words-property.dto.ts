import { PartialType } from '@nestjs/mapped-types';
import { CreateWordsPropertyDto } from './create-words-property.dto';

export class UpdateWordsPropertyDto extends PartialType(CreateWordsPropertyDto) {}

import { PartialType } from '@nestjs/mapped-types';
import { CreateAcccesoryDto } from './create-acccesory.dto';

export class UpdateAcccesoryDto extends PartialType(CreateAcccesoryDto) {}

import { Injectable } from '@nestjs/common';
import { CreateAcccesoryDto } from './dto/create-acccesory.dto';
import { UpdateAcccesoryDto } from './dto/update-acccesory.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Acccesory } from './entities/acccesory.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AcccesoriesService {
  constructor(
    @InjectRepository(Acccesory)
    private readonly AcccesoryRepository: Repository<Acccesory>,
  ) {}

  create(createAcccesoryDto: CreateAcccesoryDto) {
    return 'This action adds a new acccesory';
  }

  async findAll() {
    return await this.AcccesoryRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} acccesory`;
  }

  update(id: number, updateAcccesoryDto: UpdateAcccesoryDto) {
    return `This action updates a #${id} acccesory`;
  }

  remove(id: number) {
    return `This action removes a #${id} acccesory`;
  }
}

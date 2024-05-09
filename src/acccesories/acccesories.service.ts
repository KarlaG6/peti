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
    private readonly acccesoryRepository: Repository<Acccesory>,
  ) {}

  async create(createAcccesoryDto: CreateAcccesoryDto) {
    // const accesory = this.acccesoryRepository.create(createAcccesoryDto);
    // return await this.acccesoryRepository.save(accesory);
    return await this.acccesoryRepository.save(createAcccesoryDto);
  }

  async findAll() {
    return await this.acccesoryRepository.find();
  }

  async findOne(id: number) {
    return await this.acccesoryRepository.findOneBy({ id });
  }

  async update(id: number, updateAcccesoryDto: UpdateAcccesoryDto) {
    return await this.acccesoryRepository.update(id, updateAcccesoryDto);
  }

  async remove(id: number) {
    return await this.acccesoryRepository.softDelete({ id });
  }
}

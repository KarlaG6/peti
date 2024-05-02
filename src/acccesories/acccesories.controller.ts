import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AcccesoriesService } from './acccesories.service';
import { CreateAcccesoryDto } from './dto/create-acccesory.dto';
import { UpdateAcccesoryDto } from './dto/update-acccesory.dto';

@Controller('acccesories')
export class AcccesoriesController {
  constructor(private readonly acccesoriesService: AcccesoriesService) {}

  @Post()
  create(@Body() createAcccesoryDto: CreateAcccesoryDto) {
    return this.acccesoriesService.create(createAcccesoryDto);
  }

  @Get()
  findAll() {
    return this.acccesoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.acccesoriesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateAcccesoryDto: UpdateAcccesoryDto,
  ) {
    return this.acccesoriesService.update(id, updateAcccesoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.acccesoriesService.remove(id);
  }
}

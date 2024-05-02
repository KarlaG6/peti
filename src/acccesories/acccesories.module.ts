import { Module } from '@nestjs/common';
import { AcccesoriesService } from './acccesories.service';
import { AcccesoriesController } from './acccesories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Acccesory } from './entities/acccesory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Acccesory])],
  controllers: [AcccesoriesController],
  providers: [AcccesoriesService],
})
export class AcccesoriesModule {}

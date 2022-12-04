import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/database/prisma/prisma.service';
import { CreateExercicyDto } from './dto/create-exercicy.dto';
import { UpdateExercicyDto } from './dto/update-exercicy.dto';

@Injectable()
export class ExerciciesService {
  constructor(private prismaService: PrismaService) {}
  create(createExercicyDto: CreateExercicyDto) {
    return this.prismaService.exercicie.create({ data: createExercicyDto });
  }

  findAll() {
    return this.prismaService.exercicie.findMany();
  }

  findOne(id: number) {
    return this.prismaService.exercicie.findFirst({ where: { id: id } });
  }

  update(id: number, updateExercicyDto: UpdateExercicyDto) {
    return this.prismaService.exercicie.update({
      where: { id: id },
      data: updateExercicyDto,
    });
  }

  remove(id: number) {
    return this.prismaService.exercicie.delete({ where: { id: id } });
  }
}

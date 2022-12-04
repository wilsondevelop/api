import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/database/prisma/prisma.service';
import { CreateTrainingDto } from './dto/create-training.dto';
import { UpdateTrainingDto } from './dto/update-training.dto';

@Injectable()
export class TrainingsService {
  constructor(private prismaService: PrismaService) {}
  create(createTrainingDto: CreateTrainingDto) {
    return this.prismaService.training.create({ data: createTrainingDto });
  }

  findAll() {
    return this.prismaService.training.findMany();
  }

  findOne(id: number) {
    return this.prismaService.training.findFirst({ where: { id } });
  }

  update(id: number, updateTrainingDto: UpdateTrainingDto) {
    return this.prismaService.training.update({
      where: { id },
      data: updateTrainingDto,
    });
  }

  remove(id: number) {
    return this.prismaService.training.delete({ where: { id } });
  }
}

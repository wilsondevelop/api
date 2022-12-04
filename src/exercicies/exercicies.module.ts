import { Module } from '@nestjs/common';
import { ExerciciesService } from './exercicies.service';
import { ExerciciesController } from './exercicies.controller';
import { PrismaService } from '../shared/database/prisma/prisma.service';

@Module({
  controllers: [ExerciciesController],
  providers: [ExerciciesService, PrismaService],
})
export class ExerciciesModule {}

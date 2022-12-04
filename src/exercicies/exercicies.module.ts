import { Module } from '@nestjs/common';
import { ExerciciesService } from './exercicies.service';
import { ExerciciesController } from './exercicies.controller';

@Module({
  controllers: [ExerciciesController],
  providers: [ExerciciesService]
})
export class ExerciciesModule {}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExerciciesService } from './exercicies.service';
import { CreateExercicyDto } from './dto/create-exercicy.dto';
import { UpdateExercicyDto } from './dto/update-exercicy.dto';

@Controller('exercicies')
export class ExerciciesController {
  constructor(private readonly exerciciesService: ExerciciesService) {}

  @Post()
  create(@Body() createExercicyDto: CreateExercicyDto) {
    return this.exerciciesService.create(createExercicyDto);
  }

  @Get()
  findAll() {
    return this.exerciciesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exerciciesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExercicyDto: UpdateExercicyDto) {
    return this.exerciciesService.update(+id, updateExercicyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exerciciesService.remove(+id);
  }
}

import { PartialType } from '@nestjs/mapped-types';
import { CreateExercicyDto } from './create-exercicy.dto';

export class UpdateExercicyDto extends PartialType(CreateExercicyDto) {}

export class CreateTrainingDto {
  exercicieId: number;
  personalId: string;
  customerId: string;
  video: string;
  description?: string;
  expiresIn: Date;
  repeat: string
  serie: string
}

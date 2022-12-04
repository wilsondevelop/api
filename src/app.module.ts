import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { AuthorizationModule } from './authorization/authorization.module';
import { MembersModule } from './members/members.module';
import { ExerciciesModule } from './exercicies/exercicies.module';
import { TrainingsModule } from './trainings/trainings.module';

@Module({
  imports: [
    AuthorizationModule,
    ConfigModule.forRoot(),
    MembersModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ExerciciesModule,
    TrainingsModule,
  ],
  providers: [AppService],
})
export class AppModule {}

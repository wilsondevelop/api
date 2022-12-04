import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './shared/filters/all-exception.filter';
import { ConflictInterceptor } from './shared/inteceptors/conflict.interceptor';
import { DatabaseInterceptor } from './shared/inteceptors/database.interceptor';
import { InvalidAuthenticatedInterceptor } from './shared/inteceptors/invalid-authenticated.interceptor';
import { NotFoundInterceptor } from './shared/inteceptors/not-found.interceptor';
import { UniqueValueInterceptor } from './shared/inteceptors/unique-value.interceptor';
import { ValidationPipe } from './shared/pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   app.useGlobalPipes(new ValidationPipe());
   app.useGlobalFilters(new AllExceptionsFilter());
   app.useGlobalInterceptors(new ConflictInterceptor());
   app.useGlobalInterceptors(new DatabaseInterceptor());
   app.useGlobalInterceptors(new UniqueValueInterceptor());
   app.useGlobalInterceptors(new InvalidAuthenticatedInterceptor());
   app.useGlobalInterceptors(new NotFoundInterceptor());

   app.enableCors({
     origin: '*',
   });
  await app.listen(3333);
}
bootstrap();

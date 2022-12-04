import {
  CallHandler,
  ConflictException,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { catchError, Observable } from "rxjs";
import { ConflictError } from "../errors/Conflicterror";

@Injectable()
export class UniqueValueInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Error> {
    return next.handle().pipe(
      catchError((error) => {
        if (error instanceof ConflictError) {
          error = new ConflictException(error.message);
        }
        throw error;
      }),
    );
  }
}

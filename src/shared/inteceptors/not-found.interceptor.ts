import { NotFoundError } from "../errors/NotFoundError";
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  NotFoundException,
  CallHandler,
} from "@nestjs/common";
import { catchError, Observable } from "rxjs";

@Injectable()
export class NotFoundInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if (error instanceof NotFoundError) {
          error = new NotFoundException(error.message);
        }
        throw error;
      }),
    );
  }
}

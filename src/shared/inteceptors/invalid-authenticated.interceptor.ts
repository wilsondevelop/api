import {
  CallHandler, ExecutionContext, Injectable,
  NestInterceptor, UnauthorizedException
} from "@nestjs/common";
import { catchError, Observable } from "rxjs";

@Injectable()
export class InvalidAuthenticatedInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Error> {
    return next.handle().pipe(
      catchError((error) => {
        if (error instanceof UnauthorizedException) {
          error = new UnauthorizedException(error.message);
        }
        throw error;
      }),
    );
  }
}

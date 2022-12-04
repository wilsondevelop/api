import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import { Console } from 'console';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: UnauthorizedException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const { email, password } = request.body;

    if (
      exception.message === 'Unauthorized' &&
      exception instanceof UnauthorizedException
    ) {
      if (request.path === '/auth/login' && (!email || !password)) {
        return response.status(HttpStatus.UNAUTHORIZED).json({
          error: 'UNAUTHORIZED',
          message: 'username or password invalid',
          statusCode: HttpStatus.UNAUTHORIZED,
        });
      } else if (exception.message === 'Unauthorized') {
        return response.status(HttpStatus.UNAUTHORIZED).json({
          error: 'INVALID_TOKEN',
          message: 'Invalid token',
          statusCode: HttpStatus.UNAUTHORIZED,
        });
      } else {
        return response.status(HttpStatus.UNAUTHORIZED).json({
          error: 'UNAUTHORIZED',
          message: exception.message,
          statusCode: HttpStatus.UNAUTHORIZED,
        });
      }
    }
    if (exception && exception.hasOwnProperty('status')) {
      return response
        .status(exception.getStatus())
        .json(exception.getResponse());
    }

    console.log(exception);return;
    return response.json(exception.getResponse());
  }
}

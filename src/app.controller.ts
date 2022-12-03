import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthorizationGuard } from './authorization/authorization.guard';
import { AuthUser, CurrentUser } from './shared/decorators/current-user.decorator';

@Controller()
@UseGuards(AuthorizationGuard)

export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@CurrentUser() user:AuthUser): string {
    return this.appService.getHello();
  }
}

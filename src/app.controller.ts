import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthenticatedGuard } from './auth/authenticated.guard';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return { msg: 'Logged In', ...req.user };
  }

  @UseGuards(AuthenticatedGuard)
  @Get('protected')
  getHello(@Request() req): any {
    return req.user;
  }
}

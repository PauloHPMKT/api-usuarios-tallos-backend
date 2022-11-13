import {
  Controller,
  HttpCode,
  Post,
  HttpStatus,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { isPublic } from './decorators/is-public-decorator';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthRequest } from './models/auth.request';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @isPublic()
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  login(@Request() req: AuthRequest) {
    return this.authService.login(req.user);
  }
}

import {
  Controller,
  HttpCode,
  Post,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('login')
export class AuthController {
  @Post()
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  login() {
    console.log('teste de login');

    return;
  }
}

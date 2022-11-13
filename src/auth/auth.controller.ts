import { Controller } from '@nestjs/common';

@Controller('login')
export class AuthController {

  @Post()
  login() {
    console.log('teste de login');
  }
}

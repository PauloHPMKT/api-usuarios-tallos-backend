import { Injectable } from '@nestjs/common';
import { Encrypt } from 'src/user/helpers/user.bcrypt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);

    if (user) {
      const compareValidPass = await Encrypt.ComparePass(
        password,
        user.password,
      );

      if (compareValidPass) {
        user.password = undefined;
        return user;
      }
    }

    throw new Error('Email ou senha incorretos');
  }
}

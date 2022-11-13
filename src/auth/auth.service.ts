import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { Encrypt } from 'src/user/helpers/user.bcrypt';
import { UserService } from 'src/user/user.service';
import { UserPayload } from './models/user.payload';
import { UserToken } from './models/user.token';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  login(user: CreateUserDto): UserToken {
    const payload: UserPayload = {
      sub: user._id,
      email: user.email,
      name: user.name,
      //roles: user.roles,
    };

    const jwtToken = this.jwtService.sign(payload);

    return {
      access_token: jwtToken,
    };
  }

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

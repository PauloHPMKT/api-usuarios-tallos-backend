import { Request } from 'express';
import { CreateUserDto } from '../../user/dto/create-user.dto';

export interface AuthRequest extends Request {
  user: CreateUserDto;
}

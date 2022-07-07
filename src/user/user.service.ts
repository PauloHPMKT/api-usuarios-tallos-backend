import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('funcionarios')
    private readonly userModel: Model<CreateUserDto>,
  ) {}

  //create user
  async create(createUser: CreateUserDto) {
    const newUser = await new this.userModel(createUser);
    return newUser.save();
  }

  //list all users
  async findAll() {
    return await this.userModel.find();
  }

  async findByEmail(email: string) {
    return await this.userModel.findOne({ email });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

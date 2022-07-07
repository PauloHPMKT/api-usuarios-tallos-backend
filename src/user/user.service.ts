import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Encrypt } from './helpers/user.bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('funcionarios')
    private readonly userModel: Model<CreateUserDto>,
  ) {}

  //create user
  async create(createUser: CreateUserDto) {
    const newUser = await new this.userModel(createUser);
    newUser.password = await Encrypt.CryptPass(newUser.password);
    return newUser.save();
  }

  //list all users
  async findAll() {
    return await this.userModel.find();
  }

  //list one user
  async findByEmail(email: string) {
    return await this.userModel.findOne({ email });
  }

  //update user
  async update(email: string, updateUser: UpdateUserDto) {
    return await this.userModel.findOneAndUpdate(
      { email: email },
      { $set: updateUser },
      { new: true },
    );
  }

  //delte user
  async remove(email: string) {
    return await this.userModel.deleteOne({ email: email }).exec();
  }
}

/* eslint-disable prettier/prettier */
import {
  Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('api')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //create user
  @Post('register')
  createUser(@Body() createUser: CreateUserDto) {
    return this.userService.create(createUser);
  }

  //list all users
  @Get('listusers')
  findAll() {
    return this.userService.findAll();
  }

  //list one user
  @Get(':email')
  findOne(@Param('email') email: string) {
    return this.userService.findByEmail(email);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}

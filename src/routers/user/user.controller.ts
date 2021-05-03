import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';

import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  create(@Req() request: Request) {
    this.userService.create();
    return request.body;
  }
}

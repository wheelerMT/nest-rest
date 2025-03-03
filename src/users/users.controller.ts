import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  public getUsers() {
    return "You sent a get request to  the users endpoint";
  }

  @Post()
  public createUsers() {
    return 'You sent a post request to the users endpoint';
  }
}

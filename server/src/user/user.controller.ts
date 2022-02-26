import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  getAllUsers() {
    return ['user1', 'user2', 'user3', 'user4'];
  }
}

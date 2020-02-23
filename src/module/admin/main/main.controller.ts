import { Controller, Get } from '@nestjs/common';

@Controller('main')
export class MainController {
  @Get()
  index() {
    return '我是后台主页';
  }
}

import { HomeController } from './controllers/home.controller';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHome(): HomeController  {
    return new HomeController();
  }
}

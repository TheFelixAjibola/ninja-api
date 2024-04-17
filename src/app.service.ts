import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Happy Six (6) Months old CIRA';
  }
}

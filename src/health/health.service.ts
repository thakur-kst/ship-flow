import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class HealthService {
    constructor(private readonly configService: ConfigService) {
    }
    getHealth() {
        return {
          status: 'ok',
          service: this.configService.get('APP_NAME'),
          timestamp: new Date().toISOString(),
          version: this.configService.get('APP_VERSION'),
          environment: this.configService.get('NODE_ENV'),
         
        };
      }
}

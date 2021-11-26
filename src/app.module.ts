import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffiesController } from './coffies/coffies.controller';

@Module({
  imports: [],
  controllers: [AppController, CoffiesController],
  providers: [AppService],
})
export class AppModule {}

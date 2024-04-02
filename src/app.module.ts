import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { NinjasModule } from './ninjas/ninjas.module';

@Module({
  imports: [UserModule, NinjasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

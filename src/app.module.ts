import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { CitizenRegistrationModule } from './citizen-registration/citizen-registration.module';


@Module({
  imports: [TypeOrmModule.forRoot(),CitizenRegistrationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

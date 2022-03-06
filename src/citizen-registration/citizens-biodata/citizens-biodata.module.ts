import { TypeOrmModule } from '@nestjs/typeorm';
import { CitizensBiodatum } from './entities/citizens-biodatum.entity';

import { Module } from '@nestjs/common';
import { CitizensBiodataService } from './citizens-biodata.service';
import { CitizensBiodataController } from './citizens-biodata.controller';


@Module({
  imports: [TypeOrmModule.forFeature([CitizensBiodatum])],
  controllers: [CitizensBiodataController],
  providers: [CitizensBiodataService]
})
export class CitizensBiodataModule {}
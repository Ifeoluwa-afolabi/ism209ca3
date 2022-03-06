import { Module } from '@nestjs/common';
import { LinkedIdentitiesService } from './linked-identities.service';
import { LinkedIdentitiesController } from './linked-identities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LinkedIdentity } from './entities/linked-identity.entity';
import {CitizensBiodatum} from '../citizens-biodata/entities/citizens-biodatum.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LinkedIdentity, CitizensBiodatum])],
  controllers: [LinkedIdentitiesController],
  providers: [LinkedIdentitiesService]
})
export class LinkedIdentitiesModule {}
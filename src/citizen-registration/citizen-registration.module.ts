import { Module } from '@nestjs/common';
import { CitizensBiodataModule } from './citizens-biodata/citizens-biodata.module';
import { LinkedIdentitiesModule } from './linked-identities/linked-identities.module';

@Module({
  imports: [CitizensBiodataModule, LinkedIdentitiesModule]
})
export class CitizenRegistrationModule {}
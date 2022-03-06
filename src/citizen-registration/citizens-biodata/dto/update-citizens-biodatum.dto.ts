import { PartialType } from '@nestjs/mapped-types';
import { CreateCitizensBiodatumDto } from './create-citizens-biodatum.dto';

export class UpdateCitizensBiodatumDto extends PartialType(CreateCitizensBiodatumDto) {}
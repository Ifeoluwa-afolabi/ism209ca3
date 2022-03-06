import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCitizensBiodatumDto } from './dto/create-citizens-biodatum.dto';
import { UpdateCitizensBiodatumDto } from './dto/update-citizens-biodatum.dto';
import { CitizensBiodatum } from './entities/citizens-biodatum.entity';


@Injectable()
export class CitizensBiodataService {
  constructor(
  @InjectRepository(CitizensBiodatum)
  private  CitizensBiodataRepository: Repository<CitizensBiodatum>
  ){}

  async create(createCitizensBiodatumDto: CreateCitizensBiodatumDto)
   { const newCitizensBiodata:CitizensBiodatum = this.CitizensBiodataRepository.create(createCitizensBiodatumDto)
   // return 'This action adds a new citizensBiodatum';
   return this.CitizensBiodataRepository.save(newCitizensBiodata);
  }

  async findAll() {
   // return `This action returns all citizensBiodata`;
    return await this.CitizensBiodataRepository.find();
  }

  async findOne(id: number) {
   // return `This action returns a #${id} citizensBiodatum`;
    return await this.CitizensBiodataRepository.findOne(id);
  }

  async update(id: number, updateCitizensBiodatumDto: UpdateCitizensBiodatumDto) {
   // return `This action updates a #${id} citizensBiodatum`;
   return await this.CitizensBiodataRepository.update(id,updateCitizensBiodatumDto);
  }

 async remove(id: number) {
   // return `This action removes a #${id} citizensBiodatum`;
   return await this.CitizensBiodataRepository.delete(id);
  }
}
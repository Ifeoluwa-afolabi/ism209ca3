import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {CitizensBiodatum} from '../citizens-biodata/entities/citizens-biodatum.entity';
import { Repository } from 'typeorm';
import { CreateLinkedIdentityDto } from './dto/create-linked-identity.dto';
import { UpdateLinkedIdentityDto } from './dto/update-linked-identity.dto';
import { LinkedIdentity } from './entities/linked-identity.entity';
@Injectable()
export class LinkedIdentitiesService {
  constructor(
    @InjectRepository(LinkedIdentity)
    private LinkedIdentitiesRespository: Repository <LinkedIdentity>,
    @InjectRepository(CitizensBiodatum)
    private  CitizensBiodataRepository: Repository<CitizensBiodatum>

  ){}
  async create(createLinkedIdentityDto: CreateLinkedIdentityDto) {
   // return 'This action adds a new linkedIdentity';

   const newLinkedIdentity = this.LinkedIdentitiesRespository.create(createLinkedIdentityDto)

   if (createLinkedIdentityDto){
     const newCitizensBiodatum = this.CitizensBiodataRepository.create(createLinkedIdentityDto);
     const biodatumUser: CitizensBiodatum = await this.CitizensBiodataRepository.save(newCitizensBiodatum);
     newLinkedIdentity.citizensbiodata = biodatumUser;
   }
   return this.LinkedIdentitiesRespository.save(newLinkedIdentity);
  


  }

  async findAll() {
   // return `This action returns all linkedIdentities`;
   return await this.LinkedIdentitiesRespository.find();
  }

  async findOne(id: number) {
    //return `This action returns a #${id} linkedIdentity`;
    return await this.LinkedIdentitiesRespository.findOne();
  }

  async update(id: number, updateLinkedIdentityDto: UpdateLinkedIdentityDto) {
   // return `This action updates a #${id} linkedIdentity`;
   return await this.LinkedIdentitiesRespository.update(id,new UpdateLinkedIdentityDto);
  }

  async remove(id: number) {
   // return `This action removes a #${id} linkedIdentity`;
   return await this.LinkedIdentitiesRespository.delete(id);
  }

   /* Work on relationships */
   async setCitizenBioDataById(LinkedIdentityId: number, citizenBioId: number) {
    try {
      return await this.LinkedIdentitiesRespository.createQueryBuilder()
        .relation(LinkedIdentity, "citizensbiodata")
        .of(LinkedIdentityId)
        .set(citizenBioId)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem setting user for student: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async unsetCitizenBioDataById(LinkedIdentityId: number) {
    try {
      return await this.LinkedIdentitiesRespository.createQueryBuilder()
        .relation(LinkedIdentity, "citizensbiodata")
        .of(LinkedIdentityId)
        .set(null)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem unsetting user for student: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
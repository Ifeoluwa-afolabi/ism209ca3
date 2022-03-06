import { Controller, 
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render 
      } from '@nestjs/common';
import { CitizensBiodataService } from './citizens-biodata.service';
import { CreateCitizensBiodatumDto } from './dto/create-citizens-biodatum.dto';
import { UpdateCitizensBiodatumDto } from './dto/update-citizens-biodatum.dto';



@Controller('citizens-biodata')
export class CitizensBiodataController {
  constructor(private readonly citizensBiodataService: CitizensBiodataService) { }

  @Post()
  create(@Body() createCitizensBiodatumDto: CreateCitizensBiodatumDto) {
    return this.citizensBiodataService.create(createCitizensBiodatumDto);
  }
  @Get('create')
  @Render('citizensbiodata/citizensbiodata.html')
  createForm() {
  }

  @Get()
  findAll() {
    return this.citizensBiodataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.citizensBiodataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCitizensBiodatumDto: UpdateCitizensBiodatumDto) {
    return this.citizensBiodataService.update(+id, updateCitizensBiodatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.citizensBiodataService.remove(+id);
  }
}
import { Test, TestingModule } from '@nestjs/testing';
import { CitizensBiodataService } from './citizens-biodata.service';

describe('CitizensBiodataService', () => {
  let service: CitizensBiodataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CitizensBiodataService],
    }).compile();

    service = module.get<CitizensBiodataService>(CitizensBiodataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
import { LinkedIdentitiesService } from './linked-identities.service';
import { Test, TestingModule } from '@nestjs/testing';
import { LinkedIdentitiesController } from './linked-identities.controller';


describe('LinkedIdentitiesController', () => {
  let controller: LinkedIdentitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LinkedIdentitiesController],
      providers: [LinkedIdentitiesService],
    }).compile();

    controller = module.get<LinkedIdentitiesController>(LinkedIdentitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
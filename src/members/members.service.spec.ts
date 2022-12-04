import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../shared/database/prisma/prisma.service';
import { MembersService } from './members.service';
import { ConfigService } from '@nestjs/config';

describe('MembersService', () => {
  let service: MembersService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MembersService, PrismaService, ConfigService],
    }).compile();

    prismaService = module.get(PrismaService)

    service = module.get<MembersService>(MembersService);
    await prismaService.member.deleteMany()
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('List all members', () => {
    it('should return array members', async () => {
      const findAllSyOn = jest.spyOn(service, 'findAll');
      const members = await service.findAll();
      expect(findAllSyOn).toBeCalled();
      expect(Array.isArray(members)).toBe(true);
    });
  });

  describe('Create member', () => {
    it('should return object member', async () => {
      const createSpyOn = jest.spyOn(service, 'create');
      const member = await service.create({ name: 'member_any' });
      expect(createSpyOn).toBeCalled();
      expect(member).toMatchSnapshot()
    });
  });

    describe('FindOne member', () => {
      it('should return  member', async () => {
        const findSpyOn = jest.spyOn(service, 'findOne');
        const member = await service.findOne(27);
        expect(findSpyOn).toBeCalled();
        expect(member).toMatchSnapshot();
      });
    });
});

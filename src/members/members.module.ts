import { Module } from '@nestjs/common';
import { MembersService } from './members.service';
import { MembersController } from './members.controller';
import { PrismaService } from '../shared/database/prisma/prisma.service';

@Module({
  controllers: [MembersController],
  providers: [MembersService, PrismaService]
})
export class MembersModule {}

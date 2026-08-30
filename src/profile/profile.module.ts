import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { PrismaModule } from '../prisma/prisma.module.js';
import { ProfileResolver } from './profile.resolver.js';

@Module({
  providers: [ProfileService, ProfileResolver],
  imports: [PrismaModule]
})
export class ProfileModule {}

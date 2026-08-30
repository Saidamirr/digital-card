import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class ProfileService {
    constructor(private readonly prisma: PrismaService) {}

    async getProfile() {
        return this.prisma.db.orm.public.Profile.all();
    }
}

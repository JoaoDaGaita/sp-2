import { Prisma } from '@prisma/client'
import { UsersRepository } from '../upload-repository'
import { prisma } from '../../lib/prisma'

export class PrismaUsersRepository implements UsersRepository {
  async searchMany(query: string) {
    const users = await prisma.user.findMany({
      where: {
        OR: [
          {
            city: {
              contains: query,
              mode: 'insensitive',
            },
          },
          {
            name: {
              contains: query,
              mode: 'insensitive',
            },
          },
          {
            country: {
              contains: query,
              mode: 'insensitive',
            },
          },
          {
            favorite_sport: {
              contains: query,
              mode: 'insensitive',
            },
          },
        ],
      },
    })
    return users
  }
  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data,
    })
  }
}

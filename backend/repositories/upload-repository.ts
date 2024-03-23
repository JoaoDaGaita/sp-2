import { Prisma, User } from '@prisma/client'

export interface UsersRepository {
  create(data: Prisma.UserCreateInput): Promise<void>
  searchMany(query: string): Promise<User[]>
}

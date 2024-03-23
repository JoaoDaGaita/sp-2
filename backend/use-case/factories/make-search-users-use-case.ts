import { PrismaUsersRepository } from '../../repositories/Prisma/prisma-upload-repository'
import { SearchUsersUseCase } from '../searchUsers'
import { UploadUseCase } from '../upload'

export function makeSearchUsersUseCase() {
  const usersRepository = new PrismaUsersRepository()
  const searchUsersdUseCase = new SearchUsersUseCase(usersRepository)

  return searchUsersdUseCase
}

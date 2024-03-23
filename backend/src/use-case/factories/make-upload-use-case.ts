import { PrismaUsersRepository } from '../../repositories/Prisma/prisma-upload-repository'
import { UploadUseCase } from '../upload'

export function makeUploadUseCase() {
  const usersRepository = new PrismaUsersRepository()
  const uploadUseCase = new UploadUseCase(usersRepository)

  return uploadUseCase
}

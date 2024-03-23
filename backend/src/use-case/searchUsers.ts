import { User } from '@prisma/client'
import { UsersRepository } from '../repositories/upload-repository'

interface SearchUsersUseCaseRequest {
  query: string
}

interface SearchUsersUseCaseResponse {
  data: User[]
}

export class SearchUsersUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    query,
  }: SearchUsersUseCaseRequest): Promise<SearchUsersUseCaseResponse> {
    const data = await this.usersRepository.searchMany(query)

    return { data }
  }
}

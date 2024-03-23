import { UsersRepository } from '../repositories/upload-repository'
import readline from 'readline'
import { Readable } from 'stream'
import { string } from 'zod'

interface User {
  name: string
  city: string
  country: string
  favorite_sport: string
}

interface UploadUseCaseRequest {
  file: Express.Multer.File | undefined
}

interface UploadUseCaseResponse {
  users: User[]
}

export class UploadUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ file }: UploadUseCaseRequest) {
    const readableFile = new Readable()

    readableFile.push(file?.buffer)
    readableFile.push(null)

    const usersLine = readline.createInterface({
      input: readableFile,
    })

    const users: User[] = []

    for await (let line of usersLine) {
      if (line.startsWith('name')) continue
      const userLineSplit = line.split(',')

      users.push({
        name: userLineSplit[0],
        city: userLineSplit[1],
        country: userLineSplit[2],
        favorite_sport: userLineSplit[3],
      })
    }

    for await (let { city, country, favorite_sport, name } of users) {
      const users = this.usersRepository.create({
        city,
        country,
        favorite_sport,
        name,
      })
    }

    return { users }
  }
}

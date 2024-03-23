import { Request, Response } from 'express'
import { z } from 'zod'
import { prisma } from '../../lib/prisma'
import { makeSearchUsersUseCase } from '../../use-case/factories/make-search-users-use-case'

export async function searchUsers(request: Request, response: Response) {
  const querySchema = z.object({
    q: z.string(),
  })

  const { q } = querySchema.parse(request.query)

  const searchUsersUseCase = makeSearchUsersUseCase()

  try {
    const { data } = await searchUsersUseCase.execute({
      query: q,
    })

    return response.status(200).send({
      data,
    })
  } catch (error) {
    if (error instanceof Error)
      return response.status(500).send({ message: error.message })
  }
}

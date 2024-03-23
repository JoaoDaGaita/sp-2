import { Request, Response } from 'express'

import { z } from 'zod'
import { makeUploadUseCase } from '../../use-case/factories/make-upload-use-case'
import { IsCsvOrTxtFile } from '../../utils/isCsvOrTxtFile'

export async function uploadUserFile(request: Request, response: Response) {
  const fileSchema = z.object({
    file: z
      .any()
      .refine((f: Express.Multer.File) => f.size < 5000000, 'Max size is 5MB'),
  })

  const { file } = fileSchema.parse(request)
  //const { file } = request

  try {
    const uploadUseCase = makeUploadUseCase()

    const { users } = await uploadUseCase.execute({
      file,
    })

    return response
      .status(200)
      .send({ message: 'The file was uploaded successfully.', users })
  } catch (error) {
    if (error instanceof Error)
      return response.status(500).send({ message: error.message })
  }
}

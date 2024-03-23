import { Request, Response, Router } from 'express'

import multer from 'multer'
import { uploadUserFile } from './http/controllers/uploadUserFile'
import { searchUsers } from './http/controllers/searchUsers'
import cors from 'cors'

const multerConfig = multer()

export const router = Router()

router.post('/api/files', cors(), multerConfig.single('file'), uploadUserFile)
router.get('/api/users', searchUsers)

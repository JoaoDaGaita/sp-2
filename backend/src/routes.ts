import { Request, Response, Router } from 'express'

import multer from 'multer'
import { uploadUserFile } from './src/http/controllers/uploadUserFile'
import { searchUsers } from './src/http/controllers/searchUsers'
import cors from 'cors'

const multerConfig = multer()

export const router = Router()

router.post('/api/files', cors(), multerConfig.single('file'), uploadUserFile)
router.get('/api/users', searchUsers)

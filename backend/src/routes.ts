import { Request, Response, Router } from 'express'

import multer from 'multer'

import cors from 'cors'
import { searchUsers } from './http/controllers/searchUsers'
import { uploadUserFile } from './http/controllers/uploadUserFile'

const multerConfig = multer()

export const router = Router()

router.post('/api/files', cors(), multerConfig.single('file'), uploadUserFile)
router.get('/api/users', searchUsers)

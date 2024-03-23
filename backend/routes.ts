import { Request, Response, Router } from 'express'

import multer from 'multer'
import { uploadUserFile } from './http/controllers/uploadUserFile'
import { searchUsers } from './http/controllers/searchUsers'

const multerConfig = multer()

export const router = Router()

router.post('/api/files', multerConfig.single('file'), uploadUserFile)
router.get('/api/users', searchUsers)

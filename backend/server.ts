import express from 'express'
import multer from 'multer'
import { router } from './routes'
import cors from 'cors'

const app = express()

app.use(router)
app.use(
  cors({
    methods: 'POST',
    origin: '*',
  })
)

app.listen(3000, () => console.log('Server Running🚀'))

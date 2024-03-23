const MAX_FILE_SIZE = 5000000
export function IsCsvOrTxtFile(file: Express.Multer.File) {
  console.log(file.mimetype)

  if (file?.originalname) {
    const fileType = file.filename.split('.').pop()
    if (fileType === 'csv' || fileType === 'txt') return true
  }
  return false
}

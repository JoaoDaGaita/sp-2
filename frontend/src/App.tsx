import { ChangeEvent } from 'react'
import axios from 'axios'

const App = () => {
  async function handleSubmit(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    const formData = new FormData()

    formData.append('file', e.target.value)

    axios.post('http://localhost:3000/api/files', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  }

  return (
    <>
      <input type="submit" value="Enviar" onChange={handleSubmit} />
      <input name="file" id="file" type="file" />
    </>
  )
}

export default App

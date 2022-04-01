import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'

require('dotenv').config()

const app = express()
const PORT = process.env.SERVER_PORT || 3001

app.use(cors({ origin: '*' }))
app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
  res.json({ success: true })
})

app.listen(PORT, () => {
  console.log(`Express server is listening at ${PORT}`)
})

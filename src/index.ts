import 'dotenv/config'
import express from 'express'
const app = express()
const port = process.env.PORT || 5000
app.get('/', (_, res) => {
  console.log('GET NEW NEW / ')
  res.status(200).json({
    message: 'This is a new new version...'
  })
})
app.listen(port, () => console.log(`Running on port ${port}`))

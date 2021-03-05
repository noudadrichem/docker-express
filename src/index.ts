import 'dotenv/config'
import express from 'express'
import os from 'os'

const app = express()
const port = process.env.PORT || 5000

app.get('/', (_, res) => {
  console.log('GET / ')
  res.status(200).json({
    message: 'Hello Actions',
    hostname: os.hostname(),
    platform: os.platform(),
    networkInterfaces: os.networkInterfaces(),
    port,
  })
})
app.listen(port, () => console.log(`Running on port ${port}`))

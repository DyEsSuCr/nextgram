// NOTE: Thirds
import express from 'express'
import cors from 'cors'

// NOTE: Local
import env from './config'

// NOTE: App Init
const app = express()

// NOTE: Settings
app.set('port', env.PORT)

// NOTE: MiddleWares
app.use(express.json())
app.use(cors())

// NOTE: Routes

app.use((_, res) => {
  res.status(404).json({
    error: 'Rout Not Found'
  })
})

export default app
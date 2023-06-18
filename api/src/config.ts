import { config } from 'dotenv'

config()

const PORT = process.env.PORT
const DIALECT = process.env.DIALECT
const STORAGE = process.env.STORAGE
const KEY = process.env.KEY

export default { PORT, DIALECT, STORAGE, KEY }
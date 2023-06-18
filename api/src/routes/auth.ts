import { Router } from 'express'
import { validateDataUser } from '../validators/register'
import { signup } from '../controllers/auth'

const router = Router()

router.post('/register', validateDataUser, signup)

export { router }
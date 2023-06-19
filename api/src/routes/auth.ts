import { Router } from 'express'
import { validateDataRegister, validatorDataLogin } from '../validators/auth'
import { signin, signup } from '../controllers/auth'

const router = Router()

router.post('/register', validateDataRegister, signup)
router.post('/login', validatorDataLogin, signin)

export { router }
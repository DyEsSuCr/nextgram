import { Response, Request, NextFunction } from 'express'
import { check } from 'express-validator'
import { compareSync } from 'bcryptjs'
import { User } from '../../models'
import { validateHelper } from '../../helpers/validateHelper'

export const validatorDataLogin = [
  check('email')
    .exists()
    .not()
    .withMessage('El correo es requerido')
    .notEmpty()
    .withMessage('El correo no puede estar vacio')
    .isEmail()
    .withMessage('Correo no valido')
    .custom(async (value) => {
      const existUser = await User.findOne({ where: { email: value } })
      if (!existUser) throw new Error('Correo o contraseña incorrecto')

      return true
    }),

  check('password')
    .exists()
    .not()
    .withMessage('La contraseña es requerida')
    .notEmpty()
    .withMessage('La contraseña no puede estar vacia')
    .isLength({ min: 8, max: 30 })
    .custom(async (value, { req }) => {
      const user = await User.findOne({ where: { email: req.body.email } })
      const matchPassowrd = compareSync(value, user?.password ?? '')
      if (!matchPassowrd) throw new Error('Correo o contraseña incorrecto')

      return true
    }),

  (req: Request, res: Response, next: NextFunction) => validateHelper(req, res, next)
]
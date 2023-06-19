import { Response, Request, NextFunction } from 'express'
import { check } from 'express-validator'
import { User } from '../../models'
import { validateHelper } from '../../helpers/validateHelper'

export const validateDataRegister = [
  check('username')
    .exists()
    .not()
    .withMessage('El nombre es requerido')
    .notEmpty()
    .withMessage('El nombre no puede estar vacio')
    .isLength({ min: 3, max: 20 })
    .withMessage('Nombre de usuario debe contener minimo 3 caracteres y maximo 20')
    .custom(async (value) => {
      const user = await User.findOne({ where: { username: value } })
      if (user) throw new Error('Usuario ya registrado')

      return true
    }),

  check('email')
    .exists()
    .not()
    .withMessage('El correo es requerido')
    .notEmpty()
    .withMessage('El correo no puede estar vacio')
    .isEmail()
    .withMessage('Correo no valido')
    .custom(async (value) => {
      const user = await User.findOne({ where: { email: value } })
      if (user) throw new Error('Usuario ya registrado')

      return true
    }),

  check('password')
    .exists()
    .not()
    .withMessage('La contraseña es requerida')
    .notEmpty()
    .withMessage('La contraseña no puede estar vacia')
    .isLength({ min: 8, max: 30 })
    .withMessage('La contraseña debe contener Minimo 3 caracteres y maximo 30'),

  (req: Request, res: Response, next: NextFunction) => validateHelper(req, res, next)
]
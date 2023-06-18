import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'

export const validateHelper = (req: Request, res: Response, next: NextFunction) => {
  try {
    validationResult(req).throw()
    return next()
  } catch (err: any) {
    const { msg } = err.array()[0]
    res.status(403).json(msg)
  }
}
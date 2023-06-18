import { Sequelize } from 'sequelize'
import { Dialect } from 'sequelize/types'
import env from '../config'

const dialect: Dialect = env.DIALECT as Dialect;

export const conectionSequelize = new Sequelize({
  dialect,
  storage: env.STORAGE
})
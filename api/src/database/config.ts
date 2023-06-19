import { Sequelize } from 'sequelize-typescript'
import { Dialect } from 'sequelize/types'
import { User, Comments, Heart, Post } from '../models'
import env from '../config'

const dialect = env.DIALECT as Dialect
const storage = env.STORAGE as string

export const conectionSequelize = new Sequelize({
  dialect,
  storage,
  models: [User, Comments, Heart, Post]
})
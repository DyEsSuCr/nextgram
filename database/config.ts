import { Sequelize } from 'sequelize'
export const sequelize = new Sequelize('_', '_', '_', {
  dialect: process.env.DIALECT,
  storage: process.env.STORAGE
})
import { sequelize } from '@/database/config'

export const connectSequelize = async () => {
  try {
    await sequelize.sync({ force: false })
  } catch (err) {
    console.log(`⛔${err}⛔`)
  }
}
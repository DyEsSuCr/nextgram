import { sequelize } from '@/database/config'

export const connectSequelize = async () => {
  try {
    await sequelize.sync({ force: false })
    console.log('✅✅')
  } catch (err) {
    console.log(`⛔${err}⛔`)
  }
}
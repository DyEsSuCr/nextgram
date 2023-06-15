import { DataTypes } from 'sequelize'
import { sequelize } from '@/database/config'

export const Heart = sequelize.define('hearts', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  }
})
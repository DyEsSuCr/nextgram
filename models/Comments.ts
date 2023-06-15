import { DataTypes } from 'sequelize'
import { sequelize } from '@/database/config'

export const Comment = sequelize.define('comments', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  comment: {
    type: DataTypes.STRING(180),
    allowNull: false
  }
})
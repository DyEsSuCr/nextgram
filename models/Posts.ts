import { DataTypes } from 'sequelize'
import { sequelize } from '@/database/config'

export const Post = sequelize.define('posts', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  plot: {
    type: DataTypes.STRING(180),
    allowNull: false
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: true
  },
  state: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
})
import { DataTypes } from 'sequelize'
import { sequelize } from '@/database/config'

export const User = sequelize.define('users', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  password: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(120),
    allowNull: true
  },
  username: {
    type: DataTypes.STRING(60),
    allowNull: false,
    unique: true
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  email: {
    type: DataTypes.STRING(40),
    allowNull: false,
    unique: true
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: true
  },
  biography: {
    type: DataTypes.STRING(180),
    allowNull: true
  },
  web: {
    type: DataTypes.STRING(120),
    allowNull: true
  }
})
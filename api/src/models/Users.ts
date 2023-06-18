import { DataTypes } from 'sequelize'
import { conectionSequelize } from '../database/config'

export const User = conectionSequelize.define('users', {
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
  },
  biography: {
    type: DataTypes.STRING(180),
  },
  web: {
    type: DataTypes.STRING(120),
  }
})
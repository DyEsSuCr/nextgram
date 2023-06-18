import { DataTypes } from 'sequelize'
import { conectionSequelize } from '../database/config'

export const Heart = conectionSequelize.define('hearts', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  }
})
import { Model, Table, Column,DataType } from 'sequelize-typescript'

@Table
export class Heart extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4
  })
  id!: string
}
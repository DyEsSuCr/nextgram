import { Model, Table, Column, DataType   } from 'sequelize-typescript'
@Table
export class Comments extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4
  })
  id!: string

  @Column({
    type: DataType.STRING(180),
    allowNull: false
  })
  comment!: string
}
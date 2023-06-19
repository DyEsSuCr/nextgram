import { Model, Table, Column, DataType } from 'sequelize-typescript'
@Table
export class Post extends Model {
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
  plot!: string

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  photo!: string

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true
  })
  state!: boolean
}
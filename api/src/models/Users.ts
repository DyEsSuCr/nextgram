import { Model, Table, Column, DataType } from 'sequelize-typescript'

@Table
export class User extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4
  })
  id!: string

  @Column({
    type: DataType.STRING(60),
    allowNull: false
  })
  password!: string

  @Column({
    type: DataType.STRING(120)
  })
  name!: string  

  @Column({
    type: DataType.STRING(60),
    allowNull: false,
    unique: true
  })
  username!: string

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true
  })
  is_active!: boolean

  @Column({
    type: DataType.STRING(40),
    allowNull: false,
    unique: true
  })
  email!: string

  @Column({
    type: DataType.STRING,
  })
  avatar!: string

  @Column({
    type: DataType.STRING(180)
  })
  biography!: string
  
  @Column({
    type: DataType.STRING(120)
  })
  web!: string
} 
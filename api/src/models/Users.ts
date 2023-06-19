import { Model, Table, Column, DataType, BeforeCreate } from 'sequelize-typescript'
import bcrypt from 'bcryptjs'

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

  @BeforeCreate
  static makeUpperCase(instance: User) {
    const salt = bcrypt.genSaltSync(8)
    const hash = bcrypt.hashSync(instance.password, salt)
    instance.password = hash
  }
} 
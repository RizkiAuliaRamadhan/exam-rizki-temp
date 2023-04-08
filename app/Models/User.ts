import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel, beforeCreate, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid'
import Class from './Class'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public nama_lengkap: string

  @column.date()
  public tanggal_lahir: DateTime

  @column()
  public jenis_kelamin: string

  @column()
  public alamat: string

  @column()
  public no_telepon: string

  @column()
  public role: string

  @column()
  public rememberMeToken: string | null

  @column()
  public classId: string | null

  @belongsTo(() => Class)
  public class: BelongsTo<typeof Class>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
    if (user.role == 'trainer') {
      user.classId = null
    }
  }

  @beforeCreate()
  public static async newId(user: User) {
    if (!user.id) {
      user.id = uuid()
    }
  }
}

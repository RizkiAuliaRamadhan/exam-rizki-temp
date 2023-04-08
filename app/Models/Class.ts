import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid'

export default class Class extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public nama_kelas: string

  @column()
  public deskripsi: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async newId (classId: Class) {
    if (!classId.id) {
      classId.id = uuid()
    }
  }
}

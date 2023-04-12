import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, beforeCreate, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Class from './Class'
import User from './User'
import { v4 as uuid } from 'uuid'

export default class TrainerClass extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public trainerId: string

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column()
  public classId: string

  @belongsTo(() => Class)
  public class: BelongsTo<typeof Class>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async newId(trainerClass: TrainerClass) {
    if (!trainerClass.id) {
      trainerClass.id = uuid()
    }
  }
}

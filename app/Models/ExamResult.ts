import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, beforeCreate, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Exam from './Exam'
import { v4 as uuid } from 'uuid'

export default class ExamResult extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public date: DateTime

  @column.dateTime({ autoCreate: true })
  public waktu_mulai: DateTime

  @column.dateTime()
  public waktu_selesai: DateTime

  @column()
  public nilai: Number

  @column()
  public is_finished: boolean

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public studentId: string

  @belongsTo(() => User)
  public student: BelongsTo<typeof User>

  @column()
  public examId: string

  @belongsTo(() => Exam)
  public exam: BelongsTo<typeof Exam>

  @beforeCreate()
  public static async newId(examResult: ExamResult) {
    if (!examResult.id) {
      examResult.id = uuid()
    }
  }
  
}

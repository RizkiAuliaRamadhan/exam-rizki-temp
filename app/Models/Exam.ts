import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, beforeCreate, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Class from './Class'
import { v4 as uuid } from 'uuid'
import ExamQuestion from './ExamQuestion'

export default class Exam extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public nama_ujian: string

  @column.dateTime()
  public waktu_mulai: DateTime

  @column.dateTime()
  public waktu_selesai: DateTime

  @column()
  public durasi: number

  @column()
  public userId: string

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column()
  public classId: string

  @belongsTo(() => Class)
  public class: BelongsTo<typeof Class>
  
  @hasMany(() => ExamQuestion)
  public soal_ujian: HasMany<typeof ExamQuestion>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async newId(exam: Exam) {
    if (!exam.id) {
      exam.id = uuid()
    }
  }
}

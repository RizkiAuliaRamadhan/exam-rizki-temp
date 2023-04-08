import { DateTime } from 'luxon'
import { BaseModel, HasMany, HasOne, beforeCreate, column, hasMany, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Question from './Question'
import Exam from './Exam'
import { v4 as uuid } from 'uuid'

export default class ExamQuestion extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @hasOne(() => Question)
  public question: HasOne<typeof Question>

  @hasMany(() => Exam)
  public exams: HasMany<typeof Exam>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async newId(examQuestion: ExamQuestion) {
    if (!examQuestion.id) {
      examQuestion.id = uuid()
    }
  }
}

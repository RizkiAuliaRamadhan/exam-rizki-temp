import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, beforeCreate, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Question from './Question'
import { v4 as uuid } from 'uuid'
import Exam from './Exam'

export default class ExamQuestion extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public questionId: string

  @belongsTo(() => Question)
  public soal: BelongsTo<typeof Question>

  @column()
  public examId: string

  @belongsTo(() => Exam)
  public exam: BelongsTo<typeof Exam>

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

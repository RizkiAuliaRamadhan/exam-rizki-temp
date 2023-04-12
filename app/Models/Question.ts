import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, beforeCreate, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import QuestionBank from './QuestionBank'
import { v4 as uuid } from 'uuid'

export default class Question extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public pertanyaan: string

  @column()
  public pilihan_a: string

  @column()
  public pilihan_b: string

  @column()
  public pilihan_c: string

  @column()
  public pilihan_d: string

  @column()
  public jawaban: string

  @column()
  public is_private: Boolean 

  @column()
  public userId: string

  @belongsTo(() => User)
  public trainer: BelongsTo<typeof User>

  @column()
  public questionBankId: string

  @belongsTo(() => QuestionBank)
  public questionBank: BelongsTo<typeof QuestionBank>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async newId(question: Question) {
    if (!question.id) {
      question.id = uuid()
    }
  }
}

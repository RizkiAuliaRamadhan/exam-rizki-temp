import { DateTime } from 'luxon'
import { BaseModel, HasMany, beforeCreate, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid'
import Question from './Question'

export default class QuestionBank extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public nama: string

  @hasMany(() => Question)
  public soal: HasMany<typeof Question>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async newId(questionBank: QuestionBank) {
    if (!questionBank.id) {
      questionBank.id = uuid()
    }
  }
}

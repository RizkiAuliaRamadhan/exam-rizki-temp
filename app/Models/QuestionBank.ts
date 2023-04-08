import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid'

export default class QuestionBank extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public nama: string

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

import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, ManyToMany, beforeCreate, belongsTo, column, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import ExamQuestion from './ExamQuestion'
import User from './User'
import { v4 as uuid } from 'uuid'
export default class ExamAnswer extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public jawaban: string

  @column()
  public is_ragu: boolean

  @column()
  public userId: string

  @column()
  public examQuestionId: string

  @belongsTo(() => ExamQuestion)
  public examQuestion: BelongsTo<typeof ExamQuestion>

  @manyToMany(() => User)
  public student: ManyToMany<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async newId(examAnswer: ExamAnswer) {
    if (!examAnswer.id) {
      examAnswer.id = uuid()
    }
  }
}

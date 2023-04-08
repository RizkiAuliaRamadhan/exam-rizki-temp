import { DateTime } from 'luxon'
import { BaseModel, HasOne, ManyToMany, column, hasOne, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import ExamQuestion from './ExamQuestion'
import User from './User'

export default class ExamAnswer extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @hasOne(() => ExamQuestion)
  public examQuestion: HasOne<typeof ExamQuestion>

  @manyToMany(() => User)
  public student: ManyToMany<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

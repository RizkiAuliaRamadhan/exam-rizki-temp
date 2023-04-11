import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User';
import {v4 as uuid} from 'uuid'

export default class Token extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public token: string;

  @column()
  public userId: string;

  @column()
  public type: string;

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async newId(token: Token) {
    token.id = uuid()
  }
}

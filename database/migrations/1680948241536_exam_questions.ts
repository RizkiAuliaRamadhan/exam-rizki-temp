import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'exam_questions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()

      table.uuid('question_id').references('questions.id').onUpdate('cascade').onDelete('cascade')
      table.uuid('exam_id').references('exams.id').onUpdate('cascade').onDelete('cascade')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

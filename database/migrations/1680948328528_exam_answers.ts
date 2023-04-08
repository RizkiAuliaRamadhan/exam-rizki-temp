import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'exam_answers'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.string('jawaban')

      table.uuid('student_id').references('users.id').onUpdate('cascade').onDelete('cascade')
      table.uuid('exam_question_id').references('exam_questions.id').onUpdate('cascade').onDelete('cascade')

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

import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'exam_results'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.dateTime('waktu_mulai')
      table.dateTime('waktu_selesai')
      table.integer('nilai')
      table.boolean('is_finished').defaultTo(false)

      table.uuid('student_id').references('users.id').onUpdate('cascade').onDelete('cascade')
      table.uuid('exam_id').references('exams.id').onUpdate('cascade').onDelete('cascade')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

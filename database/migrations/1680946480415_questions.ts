import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'questions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.text('pertanyaan')
      table.text('pilihan_a')
      table.text('pilihan_b')
      table.text('pilihan_c')
      table.text('pilihan_d')
      table.string('jawaban', 1)
      table.boolean('is_private').defaultTo(false)

      table.uuid('user_id').references('users.id').onUpdate('cascade').onDelete('cascade')
      table.uuid('question_bank_id').references('question_banks.id').onUpdate('cascade').onDelete('cascade')
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

import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'exams'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.string('nama_ujian')
      table.datetime('waktu_mulai')
      table.datetime('waktu_selesai')
      table.integer('durasi')

      table.uuid('trainer_id').references('users.id').onUpdate('cascade').onDelete('cascade')
      table.uuid('class_id').references('classes.id').onUpdate('cascade').onDelete('cascade')

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

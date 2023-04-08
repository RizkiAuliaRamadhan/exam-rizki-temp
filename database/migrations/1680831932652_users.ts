import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table.string('email', 30).notNullable().unique()
      table.string('password', 180).notNullable()
      table.string('remember_me_token').nullable()
      table.string('nama_lengkap')
      table.dateTime('tanggal_lahir')
      table.enum('jenis_kelamin', ['l', 'p'])
      table.text('alamat')
      table.string('no_telepon')
      table.enum('role', ['trainer', 'student']).defaultTo('trainer')

      table.uuid('class_id').references('classes.id').onUpdate('cascade').onDelete('cascade')

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

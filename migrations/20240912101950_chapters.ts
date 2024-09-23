import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  if (await knex.schema.hasTable('chapters')) return
  return knex.schema.createTable('chapters', function (table) {
    table.increments('chapter_id').primary()
    table.integer('chapter_number').notNullable()
    table.string('chapter_summary', 255)
    table
      .integer('book_id')
      .unsigned()
      .notNullable()
      .references('book_id')
      .inTable('books')
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('chapters')
}

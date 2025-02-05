import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  if (await knex.schema.hasTable('books')) return
  return knex.schema.createTable('books', function (table) {
    table.increments('book_id').primary()
    table.string('book_complete_name', 150).notNullable().unique()
    table.string('book_reduced_name', 100).notNullable().unique()
    table.string('book_abbr', 10).notNullable().unique()
    table.string('testament', 10).notNullable()
    table.integer('book_position').notNullable().unique()
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('books')
}

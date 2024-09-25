import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('verses', function (table) {
    table.increments('verse_id').primary()
    table.integer('verse_number').notNullable()
    table
      .integer('chapter_id')
      .notNullable()
      .unsigned()
      .references('chapter_id')
      .inTable('chapters')
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('verses')
}

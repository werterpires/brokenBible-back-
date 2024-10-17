import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('originals_on_verses', function (table) {
    table
      .integer('original_id')
      .unsigned()
      .references('original_id')
      .inTable('originals')
    table
      .integer('verse_id')
      .unsigned()
      .references('verse_id')
      .inTable('verses')
    table.integer('word_position').notNullable()
    table.string('apparatus', 1500).notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('originals_on_verses')
}

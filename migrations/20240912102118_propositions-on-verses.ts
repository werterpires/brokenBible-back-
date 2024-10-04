import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('propositions_on_verses', function (table) {
    table
      .integer('verse_id')
      .unsigned()
      .references('verse_id')
      .inTable('verses')
    table
      .integer('proposition_id')
      .unsigned()
      .references('proposition_id')
      .inTable('propositions')
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('propositions_on_verses')
}

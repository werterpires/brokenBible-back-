import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('propositions', function (table) {
    table.increments('proposition_id').primary()
    table.string('proposition').notNullable()
    table
      .integer('verse_id')
      .unsigned()
      .references('verse_id')
      .inTable('verses')
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('propositions')
}

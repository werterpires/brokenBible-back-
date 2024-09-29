import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('themes_on_propositions', function (table) {
    table
      .integer('theme_id')
      .unsigned()
      .notNullable()
      .references('theme_id')
      .inTable('themes')
    table
      .integer('proposition_id')
      .unsigned()
      .notNullable()
      .references('proposition_id')
      .inTable('propositions')
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('themes_on_propositions')
}

import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('verses_on_versions', function (table) {
    table.increments('verse_on_version_id').primary()
    table
      .integer('verse_id')
      .unsigned()
      .notNullable()
      .references('verse_id')
      .inTable('verses')
    table
      .integer('version_id')
      .unsigned()
      .notNullable()
      .references('version_id')
      .inTable('versions')
    table.string('verse_text', 1500).notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('verses_on_versions')
}

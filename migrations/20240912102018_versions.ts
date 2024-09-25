import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('versions', function (table) {
    table.increments('version_id').primary()
    table.string('version_name', 150).notNullable().unique()
    table.string('version_abbr', 20).notNullable().unique()
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('versions')
}

import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('words_properties', function (table) {
    table.increments('words_property_id').primary()
    table.string('words_property_name').notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('words_properties')
}

import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(
    'possible_properties_values',
    function (table) {
      table.increments('possible_value_id').primary()
      table.string('implication').notNullable()
      table
        .integer('words_property_id')
        .unsigned()
        .references('words_property_id')
        .inTable('words_properties')
        .onDelete('RESTRICT')
      table.string('value').notNullable()
    }
  )
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('possible_properties_values')
}

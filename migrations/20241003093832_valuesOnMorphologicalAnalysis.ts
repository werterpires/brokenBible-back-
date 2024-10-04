import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(
    'values_on_morphological_analysis',
    function (table) {
      table
        .integer('morph_analysis_id')
        .unsigned()
        .references('morph_analysis_id')
        .inTable('morphological_analysis')
        .onDelete('CASCADE')
      table
        .integer('possible_value_id')
        .unsigned()
        .references('possible_value_id')
        .inTable('possible_properties_values')
        .onDelete('CASCADE')
    }
  )
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('values_on_morphological_analysis')
}

import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(
    'morphological_analysis_on_originals',
    function (table) {
      table
        .integer('original_id')
        .unsigned()
        .references('original_id')
        .inTable('originals')
        .onDelete('CASCADE')
      table
        .integer('morph_analysis_id')
        .unsigned()
        .references('morph_analysis_id')
        .inTable('morphological_analysis')
        .onDelete('CASCADE')
    }
  )
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('morphological_analysis_on_originals')
}

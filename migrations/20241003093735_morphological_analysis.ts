import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('morphological_analysis', function (table) {
    table.increments('morph_analysis_id').primary()
    table.string('analysis_name').notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('morphological_analysis')
}

import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(
    'roots_on_etymological_groups',
    function (table) {
      table
        .integer('etym_group_id')
        .unsigned()
        .references('etym_group_id')
        .inTable('etymological_groups')
      table.integer('root_id').unsigned().references('root_id').inTable('roots')
    }
  )
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('roots_on_etymological_groups')
}

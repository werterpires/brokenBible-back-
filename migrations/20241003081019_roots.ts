import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('roots', function (table) {
    table.increments('root_id').primary()
    table.string('root_word').notNullable()
    table.string('root_meaning').notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('roots')
}

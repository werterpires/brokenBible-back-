import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('originals', function (table) {
    table.increments('original_id').primary()
    table.string('original_name').notNullable()
    table.string('original_meaning').notNullable()
    table.integer('root_id').unsigned().references('root_id').inTable('roots')
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('originals')
}

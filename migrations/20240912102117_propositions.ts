import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('propositions', function (table) {
    table.increments('proposition_id').primary()
    table.string('proposition_text').notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('propositions')
}

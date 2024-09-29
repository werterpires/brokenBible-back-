import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('themes', function (table) {
    table.increments('theme_id').primary()
    table.string('theme_description').notNullable()
    table.string('theme_text').notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('themes')
}

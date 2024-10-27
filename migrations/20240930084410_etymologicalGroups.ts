import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('etymological_groups', (table) => {
    table.increments('etym_group_id').primary()
    table.string('etym_group_name').notNullable()
    table.string('etym_group_description').notNullable()
    table.string('group_root').notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('etymological_groups')
}

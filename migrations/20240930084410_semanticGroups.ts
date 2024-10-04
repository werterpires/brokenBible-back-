import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('semantic_groups', (table) => {
    table.increments('semantic_group_id').primary()
    table.string('sem_group_name').notNullable()
    table.string('sem_group_description').notNullable()
    table.string('root').notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('semantic_groups')
}

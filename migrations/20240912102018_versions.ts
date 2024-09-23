import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  // return knex.schema.createTable('versoes', function (table) {
  //   table.increments('id_versao').primary()
  //   table.string('nome_versao', 150).notNullable().unique()
  //   table.string('abreviacao_versao', 20).notNullable().unique()
  // })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('versoes')
}

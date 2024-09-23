import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  // return knex.schema.createTable('proposicoes', function (table) {
  //   table.increments('id_proposicao').primary()
  //   table.string('texto_proposicao').notNullable()
  //   table
  //     .integer('id_versiculo')
  //     .unsigned()
  //     .references('id_versiculo')
  //     .inTable('versiculos')
  // })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('proposicoes')
}

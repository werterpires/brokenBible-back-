import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  // return knex.schema.createTable('versiculos', function (table) {
  //   table.increments('id_versiculo').primary()
  //   table.integer('numero_versiculo').notNullable()
  //   table
  //     .integer('id_capitulo')
  //     .notNullable()
  //     .unsigned()
  //     .references('id_capitulo')
  //     .inTable('capitulos')
  // })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('versiculos')
}

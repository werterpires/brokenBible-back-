import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('versiculos_nas_versoes', function (table) {
    table.increments('id_versiculo_nas_versoes').primary()
    table
      .integer('id_versiculo')
      .unsigned()
      .notNullable()
      .references('id_versiculo')
      .inTable('versiculos')
    table
      .integer('id_versao')
      .unsigned()
      .notNullable()
      .references('id_versao')
      .inTable('versoes')
    table.string('texto', 1500).notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('versiculos_nas_versoes')
}

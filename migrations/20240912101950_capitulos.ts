import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('capitulos', function (table) {
    table.increments('id_capitulo').primary()
    table.integer('numero_capitulo').notNullable()
    table.string('resumo', 255)
    table
      .integer('id_livro')
      .unsigned()
      .notNullable()
      .references('id_livro')
      .inTable('livros')
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('capitulos')
}

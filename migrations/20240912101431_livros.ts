import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('livros', function (table) {
    table.increments('id_livro').primary()
    table.string('nome_completo_livro', 150).notNullable().unique()
    table.string('nome_reduzido_livro', 150).notNullable().unique()
    table.string('abreviacao_livro', 150).notNullable().unique()
    table.string('testamento', 50).notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('livros')
}

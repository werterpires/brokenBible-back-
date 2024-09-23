import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('chapters').del()
  await knex('books').del()

  await knex('books').insert([
    {
      book_id: 1,
      book_complete_name: 'Gênesis',
      book_reduced_name: 'Gênesis',
      book_abbr: 'Gn',
      testament: 'Antigo',
      book_position: 1
    },
    {
      book_id: 2,
      book_complete_name: 'Apocalipse de João',
      book_reduced_name: 'Apocalipse',
      book_abbr: 'Ap',
      testament: 'Antigo',
      book_position: 66
    },
    {
      book_id: 3,
      book_complete_name: 'Book do Eclesiastes',
      book_reduced_name: 'Eclesiastes',
      book_abbr: 'Ec',
      testament: 'Antigo',
      book_position: 21
    }
  ])

  await knex('chapters').insert([
    {
      chapter_id: 1,
      chapter_number: 1,
      chapter_summary: 'A criação do mundo em 7 dias',
      book_id: 1
    },
    {
      chapter_id: 2,
      chapter_number: 2,
      chapter_summary: 'A criação do homem e da mulher',
      book_id: 1
    },
    {
      chapter_id: 3,
      chapter_number: 3,
      chapter_summary: 'A queda do homem',
      book_id: 1
    }
  ])
}

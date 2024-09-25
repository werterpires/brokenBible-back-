import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
  await knex('verses_on_versions').del()
  await knex('verses').del()
  await knex('versions').del()
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
      book_complete_name: 'Livro do Eclesiastes',
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

  await knex('versions').insert([
    {
      version_id: 1,
      version_name: 'Almeida Revista e Atualizada - 2a. ed.',
      version_abbr: 'AAE'
    },
    {
      version_id: 2,
      version_name: 'Ave Maria - 2a. ed.',
      version_abbr: 'AM'
    },
    {
      version_id: 3,
      version_name: 'Nova Versão Internacional - 2a. ed.',
      version_abbr: 'NVI'
    }
  ])

  await knex('verses').insert([
    {
      verse_id: 1,
      chapter_id: 1,
      verse_number: 1
    },
    {
      verse_id: 2,
      chapter_id: 1,
      verse_number: 2
    },
    {
      verse_id: 3,
      chapter_id: 1,
      verse_number: 2
    }
  ])

  await knex('verses_on_versions').insert([
    {
      verse_id: 1,
      version_id: 1,
      verse_text: 'No princípio, criou Deus os céus e a terra.'
    },
    {
      verse_id: 2,
      version_id: 1,
      verse_text:
        'A terra, porém, estava sem forma e vazia; havia trevas sobre a face do abismo, e o Espírito de Deus pairava sobre as águas.'
    },
    {
      verse_id: 3,
      version_id: 1,
      verse_text: 'Disse Deus: Haja luz; e houve luz.'
    },
    {
      verse_id: 1,
      version_id: 2,
      verse_text: 'No princípio, Deus criou os céus e a terra.'
    },
    {
      verse_id: 1,
      version_id: 3,
      verse_text: 'No princípio Deus criou os céus e a terra.'
    }
  ])
}

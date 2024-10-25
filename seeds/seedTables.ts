import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
  await knex('originals_on_verses').del()
  await knex('morphological_analysis_on_originals').del()
  await knex('values_on_morphological_analysis').del()
  await knex('originals').del()
  await knex('morphological_analysis').del()
  await knex('roots_on_semantic_groups').del()
  await knex('possible_properties_values').del()
  await knex('roots').del()
  await knex('semantic_groups').del()
  await knex('words_properties').del()
  await knex('themes_on_propositions').del()
  await knex('themes').del()
  await knex('propositions_on_verses').del()
  await knex('propositions').del()
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
      verse_number: 1,
      verse_translation: 'No princípio criou Deus os céus e a terra.'
    },
    {
      verse_id: 2,
      chapter_id: 1,
      verse_number: 2,
      verse_translation:
        'A terra, porém, estava sem forma e deserta; havia trevas sobre a face do abismo, e o ruach de Deus pairava sobre as águas.'
    },
    {
      verse_id: 3,
      chapter_id: 1,
      verse_number: 3,
      verse_translation: 'E disse Deus: Haja luz; e houve luz.'
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

  await knex('propositions').insert([
    {
      proposition_id: 1,
      proposition_text: 'Houve um princípio.'
    },
    {
      proposition_id: 2,
      proposition_text: 'Deus estava no princípio.'
    },
    {
      proposition_id: 3,
      proposition_text: 'A terra foi criada.'
    }
  ])

  await knex('propositions_on_verses').insert([
    {
      proposition_id: 1,
      verse_id: 1
    },
    {
      proposition_id: 2,
      verse_id: 1
    },
    {
      proposition_id: 3,
      verse_id: 1
    }
  ])

  await knex('themes').insert([
    {
      theme_id: 1,
      theme_text: 'Princípio',
      theme_description: 'O início de algo, aquilo por onde algo começou.'
    },
    {
      theme_id: 2,
      theme_text: 'Deus',
      theme_description:
        'Um tipo de ser, com poderes capacidade acima dos poderes humanos.'
    },
    {
      theme_id: 3,
      theme_text: 'Terra',
      theme_description:
        'O local onde o ser humano habita, seja o planeta, seja a parte de baixo (em oposição ao sol), seja a parte seca (em oposição ao mar).'
    },
    {
      theme_id: 4,
      theme_text: 'Criação',
      theme_description:
        'Ato de trazer à existência algo ainda não existente ainda.'
    }
  ])

  await knex('themes_on_propositions').insert([
    {
      theme_id: 1,
      proposition_id: 1
    },
    {
      theme_id: 2,
      proposition_id: 2
    },
    {
      theme_id: 3,
      proposition_id: 3
    },
    {
      theme_id: 4,
      proposition_id: 3
    },
    {
      theme_id: 1,
      proposition_id: 2
    }
  ])

  await knex('words_properties').insert([
    {
      words_property_id: 1,
      words_property_name: 'Gênero'
    },
    {
      words_property_id: 2,
      words_property_name: 'Classe gramatical'
    },
    {
      words_property_id: 3,
      words_property_name: 'Pessoa'
    },
    {
      words_property_id: 4,
      words_property_name: 'Número'
    }
  ])

  await knex('semantic_groups').insert([
    {
      semantic_group_id: 1,
      sem_group_name: 'Cabeça, princípio, Líder',
      sem_group_description:
        'Relacionado a estar acima, ou ser o primeiro, ou estar à frente',
      root: "R'SH"
    },
    {
      semantic_group_id: 2,
      sem_group_name: 'Criar',
      sem_group_description: 'Relacionado à criação divina',
      root: "BR'"
    },
    {
      semantic_group_id: 3,
      sem_group_name: 'Deus',
      sem_group_description: 'Relacionado à figura ou ao tipo de ser: deus.',
      root: '`L'
    }
  ])

  await knex('roots').insert([
    {
      root_id: 1,
      root_word: 'RESHIYTH',
      root_meaning: 'Princípio; tempo antigo; começo de tudo; ponto de partida.'
    },
    {
      root_id: 2,
      root_word: "BARA'",
      root_meaning: 'Criar, aplicado somente a Deus.'
    },
    {
      root_id: 3,
      root_word: '`ELOHIM',
      root_meaning: 'Deuses'
    }
  ])

  await knex('possible_properties_values').insert([
    {
      possible_value_id: 1,
      words_property_id: 1,
      value: 'Masculino',
      implication:
        'É um conceito entendido como do gênero masculino no original'
    },
    {
      possible_value_id: 2,
      words_property_id: 1,
      value: 'Feminino',
      implication: 'É um conceito entendido como do gênero feminino no original'
    },
    {
      possible_value_id: 3,
      words_property_id: 3,
      value: 'Terceira',
      implication:
        'Refere-se, primariarmente, não a quem fala nem a com quem se fala, mas ao terceiro'
    },
    {
      possible_value_id: 4,
      words_property_id: 2,
      value: 'Substantivo',
      implication:
        'É o nome de um ser, de um conceito, de uma ação, ou de uma coisa'
    },
    {
      possible_value_id: 5,
      words_property_id: 4,
      value: 'Singular',
      implication: 'Refere-se a apenas um ser'
    }
  ])

  await knex('roots_on_semantic_groups').insert([
    {
      semantic_group_id: 1,
      root_id: 1
    },
    {
      semantic_group_id: 2,
      root_id: 2
    },
    {
      semantic_group_id: 3,
      root_id: 3
    }
  ])

  await knex('morphological_analysis').insert([
    {
      morph_analysis_id: 1,
      analysis_name: 'Substantivo feminino singular'
    },
    {
      morph_analysis_id: 2,
      analysis_name: 'Verbo kal completo terceira pessoa masculino singular'
    },
    {
      morph_analysis_id: 3,
      analysis_name: 'Substantivo feminino plural'
    }
  ])

  await knex('originals').insert([
    {
      original_id: 1,
      original_name: 'Reshiyth',
      original_meaning:
        'Princípio; tempo antigo; começo de tudo; ponto de partida.',
      root_id: 1
    },
    {
      original_id: 2,
      original_name: "Bara'",
      original_meaning: 'Criar, aplicado somente a Deus.',
      root_id: 2
    },
    {
      original_id: 3,
      original_name: 'Elohim',
      original_meaning: 'Deuses',
      root_id: 3
    }
  ])

  await knex('values_on_morphological_analysis').insert([
    {
      morph_analysis_id: 1,
      possible_value_id: 2
    },
    {
      morph_analysis_id: 3,
      possible_value_id: 2
    },
    {
      morph_analysis_id: 2,
      possible_value_id: 3
    },
    {
      morph_analysis_id: 1,
      possible_value_id: 4
    },
    {
      morph_analysis_id: 1,
      possible_value_id: 5
    }
  ])

  await knex('morphological_analysis_on_originals').insert([
    {
      original_id: 1,
      morph_analysis_id: 1
    },
    {
      original_id: 2,
      morph_analysis_id: 2
    },
    {
      original_id: 3,
      morph_analysis_id: 3
    }
  ])

  await knex('originals_on_verses').insert([
    {
      original_id: 1,
      verse_id: 1,
      word_position: 1,
      apparatus:
        'Será que não pode significar: "A princípio", "para começo de conversa?"'
    },
    {
      original_id: 2,
      verse_id: 1,
      word_position: 2,
      apparatus:
        'Dizem que essa palavra é usada apenas para Deus, mas não é verdade.'
    },
    {
      original_id: 3,
      verse_id: 1,
      word_position: 1,
      apparatus:
        'E se o correto for traduzir essa palavra como um coletivo (divindade, talvez).'
    }
  ])
}

import { Injectable, NotFoundException } from '@nestjs/common'

import { InjectConnection } from 'nest-knexjs'
import {
  AtualizarBook as UpdateBook,
  createBook as createBook,
  Book
} from './types'
import { Paginator } from 'src/shared/types/repo.types'

@Injectable()
export class BooksRepo {
  constructor(@InjectConnection() private readonly knex) {}

  async createBook(bookData: createBook): Promise<number> {
    const {
      bookAbbr,
      bookCompleteName,
      bookReducedName,
      testament,
      bookPosition
    } = bookData

    const [bookId] = await this.knex('books').insert({
      book_abbr: bookAbbr,
      book_complete_name: bookCompleteName,
      book_reduced_name: bookReducedName,
      book_position: bookPosition,
      testament
    })

    return bookId
  }

  async findBooks(paginator: Paginator): Promise<Book[]> {
    const lirvrosConsult = await this.knex('books')
      .select('*')
      .limit(paginator.limit)
      .offset(paginator.offset)
      .orderBy(paginator.orderBy, paginator.direction)

    const books = lirvrosConsult.map((book) => {
      return <Book>{
        bookAbbr: book.book_abbr,
        bookCompleteName: book.book_complete_name,
        bookReducedName: book.book_reduced_name,
        testament: book.testament,
        bookPosition: book.book_position,
        bookId: book.book_id
      }
    })

    return books
  }

  async findBookById(idBook: number): Promise<Book> {
    const bookConsult = await this.knex('books')
      .first('*')
      .where('book_id', idBook)
    if (!bookConsult) {
      throw new NotFoundException('#Book não encontrado')
    }

    const book: Book = {
      bookAbbr: bookConsult.book_abbr,
      bookCompleteName: bookConsult.book_complete_name,
      bookReducedName: bookConsult.book_reduced_name,
      testament: bookConsult.testament,
      bookPosition: bookConsult.book_position,
      bookId: bookConsult.book_id
    }

    return book
  }

  async updateBook(bookData: UpdateBook): Promise<void> {
    const {
      bookAbbr,
      bookCompleteName,
      bookReducedName,
      testament,
      bookId,
      bookPosition
    } = bookData
    await this.knex('books')
      .update({
        book_abbr: bookAbbr,
        book_complete_name: bookCompleteName,
        book_reduced_name: bookReducedName,
        book_position: bookPosition,
        testament
      })
      .where('book_id', bookId)
  }

  async deleteBook(bookId: number): Promise<void> {
    await this.knex('books').delete().where('book_id', bookId)
  }
}

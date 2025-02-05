import { BadRequestException, Injectable } from '@nestjs/common'

import { BooksRepo } from './books.repo'
import { Book } from './types'
import { Paginator } from 'src/shared/types/repo.types'
import { CreateBookDto } from './dto/create-livro.dto'
import { UpdateBookDto } from './dto/update-livro.dto'

@Injectable()
export class BooksService {
  constructor(private readonly booksRepo: BooksRepo) {}

  async createBook(bookData: CreateBookDto): Promise<Book> {
    const idBook = await this.booksRepo.createBook(bookData)

    const createdBook = await this.booksRepo.findBookById(idBook)

    return createdBook
  }

  async findBooks(
    offset: number,
    limit: number,
    orderBy: string,
    direction: string
  ): Promise<Book[]> {
    if (isNaN(offset) || isNaN(limit)) {
      throw new BadRequestException('#Parâmetros de paginação inválidos')
    }

    const paginator: Paginator = {
      limit,
      offset,
      orderBy,
      direction
    }

    const books = await this.booksRepo.findBooks(paginator)

    return books
  }

  async findBookPorId(idBook: number): Promise<Book> {
    const book = await this.booksRepo.findBookById(idBook)

    return book
  }

  async updateBook(bookData: UpdateBookDto): Promise<Book> {
    await this.booksRepo.updateBook(bookData)

    const updatedBook = await this.booksRepo.findBookById(bookData.bookId)

    return updatedBook
  }

  async deleteBook(idBook: number): Promise<void> {
    await this.booksRepo.deleteBook(idBook)
  }
}

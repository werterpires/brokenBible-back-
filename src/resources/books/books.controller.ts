import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  HttpStatus,
  HttpCode
} from '@nestjs/common'

import { Book } from './types'
import { BooksService } from './books.service'
import { CreateBookDto } from './dto/create-livro.dto'
import { UpdateBookDto } from './dto/update-livro.dto'

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async createBook(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return await this.booksService.createBook(createBookDto)
  }

  @Get(':offset/:limit/:orderBy/:direction')
  async findBooks(
    @Param('offset') offset: string,
    @Param('limit') limit: string,
    @Param('orderBy') orderBy: string,
    @Param('direction') direction: string
  ): Promise<Book[]> {
    return await this.booksService.findBooks(
      +offset,
      +limit,
      orderBy,
      direction
    )
  }

  @Get(':idBook')
  async findBookById(@Param('idBook') bookId: string): Promise<Book> {
    return await this.booksService.findBookPorId(+bookId)
  }

  @Put()
  async atualizarBook(@Body() updateBookDto: UpdateBookDto): Promise<Book> {
    return await this.booksService.updateBook(updateBookDto)
  }

  @Delete(':bookId')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteBook(@Param('bookId') bookId: string): Promise<void> {
    return await this.booksService.deleteBook(+bookId)
  }
}

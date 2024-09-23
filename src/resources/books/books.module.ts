import { Module } from '@nestjs/common'
import { BooksService } from './books.service'
import { BooksRepo } from './books.repo'
import { BooksController } from './books.controller'

const services = [BooksService, BooksRepo]
@Module({
  controllers: [BooksController],
  providers: services,
  exports: services
})
export class BooksModule {}

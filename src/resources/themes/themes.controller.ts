import { Body, Controller, Get, Post } from '@nestjs/common'
import { ThemesService } from './themes.service'
import { CreateThemeDto } from './dto/create-theme.dto'

@Controller('themes')
export class ThemesController {
  constructor(private readonly themesService: ThemesService) {}

  @Get()
  async getAllThemes() {
    return await this.themesService.findAllThemes()
  }

  @Post()
  async createTheme(@Body() createThemeDto: CreateThemeDto) {
    return await this.themesService.createTheme(createThemeDto)
  }
}

import { Injectable } from '@nestjs/common'
import { ThemesRepo } from './themes.repo'
import { CreateThemeDto } from './dto/create-theme.dto'

@Injectable()
export class ThemesService {
  constructor(private readonly themesRepo: ThemesRepo) {}

  async findAllThemes() {
    return this.themesRepo.getAllThemes()
  }

  findThemeById(themeId: number) {
    return this.themesRepo.getThemeById(themeId)
  }

  async createTheme(creteThemeDto: CreateThemeDto) {
    const themeId = await this.themesRepo.createTheme(creteThemeDto)
    const Theme = await this.themesRepo.getThemeById(themeId)
    return Theme
  }
}

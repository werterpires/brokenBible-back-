import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { KnexModule, KnexModuleOptions } from 'nest-knexjs'
import { ErrorsService } from './shared/filters/global-errors/errors-service.service'
import * as dotenv from 'dotenv'
import { GlobalErrorsFilter } from './shared/filters/global-errors/global-errors.filter'
import { APP_FILTER } from '@nestjs/core'
import { BooksModule } from './resources/books/books.module'
import { ChaptersModule } from './resources/chapters/chapters.module';
import { VersesModule } from './resources/verses/verses.module';
import { VersionsModule } from './resources/versions/versions.module';
import { VersesOnVersionsModule } from './resources/verses-on-versions/verses-on-versions.module';
import { PropositionsModule } from './resources/propositions/propositions.module';
import { ThemesModule } from './resources/themes/themes.module';
import { ThemesOnPropositionsModule } from './resources/themes-on-propositions/themes-on-propositions.module';
import { PropositionsOnVersesModule } from './resources/propositions-on-verses/propositions-on-verses.module';
import { OriginalsOnVersesModule } from './resources/originals-on-verses/originals-on-verses.module';
import { OriginalsModule } from './resources/originals/originals.module';
import { RootsModule } from './resources/roots/roots.module';
import { MorphologicalAnalysisModule } from './resources/morphological-analysis/morphological-analysis.module';
import { MorphologicalAnalysisOnOriginalsModule } from './resources/morphological-analysis-on-originals/morphological-analysis-on-originals.module';
import { WordsPropertiesModule } from './resources/words-properties/words-properties.module';
import { PossiblePropertiesValuesModule } from './resources/possible-properties-values/possible-properties-values.module';
import { ValuesOnMorphologicalAnalysisModule } from './resources/values-on-morphological-analysis/values-on-morphological-analysis.module';
import { EtymologicalGroupsModule } from './resources/etymological-groups/etymological-groups.module';

dotenv.config()

export const mysqlConfig: KnexModuleOptions = {
  config: {
    client: 'mysql2',
    useNullAsDefault: true,
    connection: {
      host: process.env.SQL_DEV_HOST,
      user: process.env.SQL_DEV_USER,
      password: process.env.SQL_DEV_PASS,
      database: process.env.SQL_DEV_DB,
      ssl: undefined,
      typeCast: function (field, next) {
        if (field.type === 'TINY' && field.length === 1) {
          // retorna tipo booleano ou null
          switch (field.string()) {
            case null:
            case undefined:
            case '':
            case 'null':
            case 'NULL':
              return null
            case '0':
              return false
            case '1':
              return true
          }
        } else if (field.type === 'DATE' && field.length > 1) {
          return field.string()
        } else if (field.type === 'DATETIME' && field.length > 1) {
          return field.string().substring(0, 10)
        }
        return next()
      }
    }
  }
}

@Module({
  imports: [KnexModule.forRoot(mysqlConfig), BooksModule, ChaptersModule, VersesModule, VersionsModule, VersesOnVersionsModule, PropositionsModule, ThemesModule, ThemesOnPropositionsModule, PropositionsOnVersesModule, OriginalsOnVersesModule, OriginalsModule, RootsModule, MorphologicalAnalysisModule, MorphologicalAnalysisOnOriginalsModule, WordsPropertiesModule, PossiblePropertiesValuesModule, ValuesOnMorphologicalAnalysisModule, EtymologicalGroupsModule],
  controllers: [AppController],
  providers: [
    AppService,
    ErrorsService,
    { provide: APP_FILTER, useClass: GlobalErrorsFilter }
  ]
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgres://ckuihpbw:XrNoncKHLFQO4cn9Z2XU8ybIlTwjMcMk@tiny.db.elephantsql.com/ckuihpbw',
      entities: [__dirname + '/**/entity.*{.ts,.js}'], // import all entities form the entities folder
      synchronize: true, // make sure the database schema is in sync with the app code
      logging: true, // to log SQL queries
      logger: 'advanced-console', // console logger used by TypeORM
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

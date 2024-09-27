import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
// import DatabaseAtividadeRepository from './database-atividdadeRepository';
import CursosRepositoryDB from './cursosRespository.database';
import CursoEntity from './entities/CursoEntity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Torna o ConfigService acessível em qualquer lugar sem precisar importar
    }),
    TypeOrmModule.forFeature([CursoEntity]),
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [__dirname + '/entities/**'],
        migrations: [__dirname + '/migrations/*.ts'],
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    // {
    //   provide: 'atividadesRepository',
    //   useClass: DatabaseAtividadeRepository,
    // },
    CursosRepositoryDB,
  ],
  exports: [CursosRepositoryDB],
})
export class DbModule {}

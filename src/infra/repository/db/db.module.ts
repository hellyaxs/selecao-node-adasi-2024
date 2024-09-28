import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import CursosRepositoryDB from './sql/cursosRespository.database';
import CursoEntity from './entities/CursoEntity';
import TarefasEntity from './entities/TarefasEntity';
import EstudanteEntity from './entities/EstudanteEntity';
import AtividadeEntity from './entities/AtividadeEntity';
import DatabaseTarefasRepository from './sql/tarefasRepository.database';
import DatabaseAtividadeRepository from './sql/atividadeRepository.database';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Torna o ConfigService acessível em qualquer lugar sem precisar importar
    }),
    TypeOrmModule.forFeature([
      CursoEntity,
      TarefasEntity,
      EstudanteEntity,
      AtividadeEntity,
    ]),
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
  exports: [
    CursosRepositoryDB,
    DatabaseTarefasRepository,
    DatabaseAtividadeRepository,
  ],
})
export class DbModule {}

import { Module } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CursosController } from './cursos.controller';
import { DbModule } from 'src/infra/repository/db/db.module';

@Module({
  imports: [DbModule],
  controllers: [CursosController],
  providers: [CursosService],
})
export class CursosModule {}

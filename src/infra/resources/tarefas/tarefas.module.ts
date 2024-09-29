import { Module } from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { TarefasController } from './tarefas.controller';
import { DbModule } from 'src/infra/repository/db/db.module';

@Module({
  imports: [DbModule],
  controllers: [TarefasController],
  providers: [TarefasService],
})
export class TarefasModule {}

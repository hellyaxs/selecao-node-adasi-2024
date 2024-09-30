import { Module } from '@nestjs/common';
import { CursosModule } from './infra/resources/cursos/cursos.module';
import { AtividadesModule } from './infra/resources/atividades/atividades.module';
import { EstudantesModule } from './infra/resources/estudantes/estudantes.module';
import { TarefasModule } from './infra/resources/tarefas/tarefas.module';
import { AllExceptionsFilter } from './allexceptionsfilter';

@Module({
  imports: [CursosModule, AtividadesModule, EstudantesModule, TarefasModule],
  providers: [AllExceptionsFilter],
})
export class AppModule {}

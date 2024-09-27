import { Module } from '@nestjs/common';
import { CursosModule } from './infra/resources/cursos/cursos.module';

@Module({
  imports: [CursosModule],
})
export class AppModule {}

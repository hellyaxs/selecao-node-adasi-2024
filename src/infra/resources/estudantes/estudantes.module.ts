import { Module } from '@nestjs/common';
import { EstudantesService } from './estudantes.service';
import { EstudantesController } from './estudantes.controller';
import { DbModule } from 'src/infra/repository/db/db.module';

@Module({
  imports: [DbModule],
  controllers: [EstudantesController],
  providers: [EstudantesService],
})
export class EstudantesModule {}

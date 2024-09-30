import { Module } from '@nestjs/common';
import { AtividadesService } from './atividades.service';
import { AtividadesController } from './atividades.controller';
import { DbModule } from 'src/infra/repository/db/db.module';

@Module({
  imports: [DbModule],
  controllers: [AtividadesController],
  providers: [AtividadesService],
})
export class AtividadesModule {}

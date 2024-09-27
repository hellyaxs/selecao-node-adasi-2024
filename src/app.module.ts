import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CursosModule } from './infra/resources/cursos/cursos.module';

@Module({
  imports: [CursosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Injectable } from '@nestjs/common';
import { CreateAtividadeDto } from './dto/create-atividade.dto';
import CreateAtividadeUsecase from 'src/application/usecases/atividades/createAtividadeUsecase';
import DatabaseAtividadeRepository from 'src/infra/repository/db/sql/atividadeRepository.database';
import IniciarAtividadeUsecase from 'src/application/usecases/atividades/iniciarAtividadeUsecase';
import { UpdateAtividadeDto } from './dto/update-atividade.dto';
import finalizarAtividadeUsecase from 'src/application/usecases/atividades/encerrarAtividadeUsecase';

@Injectable()
export class AtividadesService {
  constructor(
    private readonly repository: DatabaseAtividadeRepository,
    private readonly createUsecase: CreateAtividadeUsecase,
    private readonly iniciaratividade: IniciarAtividadeUsecase,
    private readonly finalizaratividade: finalizarAtividadeUsecase,
  ) {}
  async create(createAtividadeDto: CreateAtividadeDto) {
    return this.createUsecase
      .execute(CreateAtividadeDto.toDomain(createAtividadeDto))
      .then((atividade) => {
        return atividade;
      });
  }

  findAll() {
    return this.repository.getAtividades();
  }

  findOne(id: string) {
    return this.repository.getAtividade(id);
  }

  update(id: string, updateAtividadeDto: UpdateAtividadeDto) {
    return this.repository.updateAtividade(
      id,
      UpdateAtividadeDto.toDomain(updateAtividadeDto),
    );
  }
  async iniciarAtividade(id: string, horario_start: Date) {
    const atividade = await this.repository.getAtividade(id);
    return await this.iniciaratividade.execute(horario_start, atividade);
  }

  async finalizarAtividade(id: string, horario_end: Date) {
    const atividade = await this.repository.getAtividade(id);
    return await this.finalizaratividade.execute(horario_end, atividade);
  }

  remove(id: string) {
    return this.repository.deleteAtividade(id);
  }
}

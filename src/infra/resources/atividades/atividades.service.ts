import { Injectable } from '@nestjs/common';
import { CreateAtividadeDto } from './dto/create-atividade.dto';
// import { UpdateAtividadeDto } from './dto/update-atividade.dto';
import CreateAtividadeUsecase from 'src/application/usecases/atividades/createAtividadeUsecase';
import DatabaseAtividadeRepository from 'src/infra/repository/db/sql/atividadeRepository.database';

@Injectable()
export class AtividadesService {
  constructor(
    private readonly repository: DatabaseAtividadeRepository,
    private readonly createUsecase: CreateAtividadeUsecase,
  ) {}
  async create(createAtividadeDto: CreateAtividadeDto) {
    return this.createUsecase.execute(
      CreateAtividadeDto.toDomain(createAtividadeDto),
    );
  }

  findAll() {
    return this.repository.getAtividades();
  }

  findOne(id: string) {
    return this.repository.getAtividade(id);
  }

  // update(id: string, updateAtividadeDto: UpdateAtividadeDto) {
  //   return this.repository.updateAtividade(id, updateAtividadeDto);
  // }

  remove(id: string) {
    return this.repository.deleteAtividade(id);
  }
}

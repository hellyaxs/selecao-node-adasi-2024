import { Injectable } from '@nestjs/common';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
import DatabaseTarefasRepository from 'src/infra/repository/db/sql/tarefasRepository.database';
import { Tarefas } from 'src/domain/tarefas/tarefas';

@Injectable()
export class TarefasService {
  constructor(private readonly repository: DatabaseTarefasRepository) {}
  create(createTarefaDto: CreateTarefaDto) {
    const tarefa = Tarefas.create(createTarefaDto.nome);
    return this.repository.createTarefa(tarefa);
  }

  findAll() {
    return this.repository.getTarefas();
  }

  findOne(id: string) {
    return this.repository.getTarefa(id);
  }

  async update(id: string, updateTarefaDto: UpdateTarefaDto) {
    const tarefa = await this.repository.getTarefa(id);
    tarefa.nome = updateTarefaDto.nome ?? tarefa.nome;
    return this.repository.updateTarefa(id, tarefa);
  }

  remove(id: string) {
    return this.repository.deleteTarefa(id);
  }
}

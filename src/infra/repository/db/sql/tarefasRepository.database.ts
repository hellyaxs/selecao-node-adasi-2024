import { Injectable } from '@nestjs/common';
import TarefasRepository from 'src/application/repository/tarefasRepository';
import { Tarefas } from 'src/domain/tarefas/tarefas';
import { Repository } from 'typeorm';
import TarefasEntity from '../entities/TarefasEntity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export default class DatabaseTarefasRepository implements TarefasRepository {
  constructor(
    @InjectRepository(TarefasEntity)
    private readonly entityRepository: Repository<TarefasEntity>,
  ) {}
  createTarefa(data: Tarefas): Promise<Tarefas> {
    return this.entityRepository.save(TarefasEntity.fromDomain(data));
  }
  updateTarefa(id: string, data: Tarefas): Promise<Tarefas> {
    return this.entityRepository.update(data.id, data).then(() => data);
  }
  deleteTarefa(id: string): Promise<void> {
    return this.entityRepository.delete(id).then(() => undefined);
  }
  getTarefa(id: string): Promise<Tarefas> {
    return this.entityRepository
      .findOneBy({ id } as { id: string })
      .then((tarefa) => {
        return TarefasEntity.toDomain(tarefa);
      });
  }
  getTarefas(): Promise<Tarefas[]> {
    return this.entityRepository.find().then((tarefas) => {
      return tarefas.map((tarefa) => TarefasEntity.toDomain(tarefa));
    });
  }
}

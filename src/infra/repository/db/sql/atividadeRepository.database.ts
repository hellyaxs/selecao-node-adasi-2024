import AtividadesRepository from 'src/application/repository/atividadesRepository';
import { Atividades } from 'src/domain/atividades/atividades';
import { Repository } from 'typeorm';
import AtividadeEntity from '../entities/AtividadeEntity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import TarefasEntity from '../entities/TarefasEntity';
import EstudanteEntity from '../entities/EstudanteEntity';

@Injectable()
export default class DatabaseAtividadeRepository
  implements AtividadesRepository
{
  constructor(
    @InjectRepository(AtividadeEntity)
    private readonly entityRepository: Repository<AtividadeEntity>,
    @InjectRepository(TarefasEntity)
    private readonly tarefasRepository: Repository<TarefasEntity>,
    @InjectRepository(EstudanteEntity)
    private readonly estudanteRepository: Repository<EstudanteEntity>,
  ) {}
  async createAtividade(data: Atividades): Promise<Atividades> {
    const tarefa = await this.tarefasRepository.findOne({
      where: { id: data.tarefa.id },
    });
    if (!tarefa) {
      throw new NotFoundException(
        `Tarefa com ID ${data.tarefa.id} não encontrada.`,
      );
    }

    const estudante = await this.estudanteRepository.findOne({
      where: { cpf: data.estudante.cpf },
      relations: ['curso'],
    });
    if (!estudante) {
      throw new NotFoundException(
        `Estudante com CPF ${data.estudante.cpf} não encontrado.`,
      );
    }
    const atividadeEntity = new AtividadeEntity(
      data.id,
      tarefa,
      estudante,
      data.horario_agendado_inicio,
      data.horario_agendado_termino,
      data?.horario_de_incio,
      data?.horario_de_termino,
    );

    return this.entityRepository.save(atividadeEntity).then((atividade) => {
      return AtividadeEntity.toDomain(atividade);
    });
  }
  updateAtividade(id: string, data: Atividades): Promise<Atividades> {
    return this.entityRepository
      .update(id, AtividadeEntity.fromDomain(data))
      .then((value) => {
        return value.raw;
      });
  }
  deleteAtividade(id: string): void {
    this.entityRepository.delete(id);
  }
  getAtividade(id: string): Promise<Atividades> {
    return this.entityRepository
      .findOne({
        where: { id },
        relations: ['tarefa', 'estudante', 'estudante.curso'],
      })
      .then((atividade) => {
        return AtividadeEntity.toDomain(atividade);
      });
  }
  getAtividades(): Promise<Atividades[] | void> {
    return this.entityRepository
      .find({ relations: ['tarefa', 'estudante', 'estudante.curso'] })
      .then((atividades) => {
        return atividades.map((atividade) =>
          AtividadeEntity.toDomain(atividade),
        );
      });
  }
}

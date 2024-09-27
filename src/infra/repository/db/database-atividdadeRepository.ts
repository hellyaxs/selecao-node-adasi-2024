import AtividadesRepository from 'src/application/repository/atividadesRepository';
import { Atividades } from 'src/domain/atividades/atividades';
import { Repository } from 'typeorm';
import AtividadeEntity from './entities/AtividadeEntity';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class DatabaseAtividadeRepository
  implements AtividadesRepository
{
  constructor(private readonly entityRepository: Repository<AtividadeEntity>) {}
  createAtividade(data: Atividades): Promise<Atividades> {
    return this.entityRepository.save(data);
  }
  updateAtividade(data: Atividades): Promise<Atividades> {
    throw new Error('Method not implemented.' + data);
  }
  deleteAtividade(id: string): void {
    this.entityRepository.delete(id);
  }
  getAtividade(id: string): Promise<Atividades | void> {
    return this.entityRepository.findOneBy(id).then((atividade) => {
      AtividadeEntity.toDomain(atividade);
    });
  }
  getAtividades(): Promise<Atividades[] | void> {
    return this.entityRepository.find().then((atividades) => {
      atividades.map((atividade) => AtividadeEntity.toDomain(atividade));
    });
  }
}

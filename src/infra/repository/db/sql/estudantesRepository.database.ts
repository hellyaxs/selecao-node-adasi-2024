import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import EstudanteEntity from '../entities/EstudanteEntity';
import { Repository } from 'typeorm';
import EstudanteRepository from 'src/application/repository/estudanteRepository';
import { Estudante } from 'src/domain/estudante/estudante';

@Injectable()
export default class DatabaseEstudanteRepository
  implements EstudanteRepository
{
  constructor(
    @InjectRepository(EstudanteEntity)
    private readonly entityRepository: Repository<EstudanteEntity>,
  ) {}
  async createEstudante(data: Estudante): Promise<Estudante> {
    return this.entityRepository.save(data);
  }
  updateEstudante(cpf: string, data: Estudante): Promise<Estudante> {
    return this.entityRepository.update(cpf, data).then(() => data);
  }
  deleteEstudante(id: string): Promise<any> {
    return this.entityRepository.delete(id).then(() => undefined);
  }
  getEstudante(cpf: string): Promise<Estudante> {
    return this.entityRepository
      .findOne({ where: { cpf }, relations: ['curso'] })
      .then((estudante) => {
        return EstudanteEntity.toDomain(estudante);
      });
  }
  getEstudantes(): Promise<Estudante[]> {
    return this.entityRepository
      .find({ relations: ['curso'] })
      .then((estudantes) => {
        return estudantes.map((estudante) =>
          EstudanteEntity.toDomain(estudante),
        );
      });
  }
}

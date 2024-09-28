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
  createEstudante(data: Estudante): Promise<Estudante> {
    return this.entityRepository.save(data);
  }
  updateEstudante(cpf: string, data: Estudante): Promise<Estudante> {
    return this.entityRepository.update(cpf, data).then(() => data);
  }
  deleteEstudante(id: string): Promise<any> {
    return this.entityRepository.delete(id).then(() => undefined);
  }
  getEstudante(cpf: string): Promise<Estudante | void> {
    return this.entityRepository
      .findOneBy({ cpf } as { cpf: string })
      .then((estudante) => {
        EstudanteEntity.toDomain(estudante);
      });
  }
  getEstudantes(): Promise<Estudante[] | void> {
    return this.entityRepository.find().then((estudantes) => {
      estudantes.map((estudante) => EstudanteEntity.toDomain(estudante));
    });
  }
}

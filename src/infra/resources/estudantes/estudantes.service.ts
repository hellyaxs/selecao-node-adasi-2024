import { Injectable } from '@nestjs/common';
import { CreateEstudanteDto } from './dto/create-estudante.dto';
import DatabaseEstudanteRepository from 'src/infra/repository/db/sql/estudantesRepository.database';
import { UpdateEstudanteDto } from './dto/update-estudante.dto';
import CursosRepositoryDB from 'src/infra/repository/db/sql/cursosRespository.database';

@Injectable()
export class EstudantesService {
  constructor(
    private readonly cursoRepository: CursosRepositoryDB,
    private readonly repository: DatabaseEstudanteRepository,
  ) {}
  async create(createEstudanteDto: CreateEstudanteDto) {
    const curso = await this.cursoRepository.getCursoById(
      createEstudanteDto.cursoId,
    );
    createEstudanteDto.cursoNome = curso.nome;
    return this.repository.createEstudante(
      CreateEstudanteDto.toDomain(createEstudanteDto),
    );
  }

  findAll() {
    return this.repository.getEstudantes();
  }

  findOne(id: string) {
    return this.repository.getEstudante(id);
  }

  async update(cpf: string, updateEstudanteDto: UpdateEstudanteDto) {
    const aluno = await this.repository.getEstudante(cpf);
    if (!aluno) {
      throw new Error(`Estudante com CPF ${cpf} não encontrado.`);
    }

    aluno.nome = updateEstudanteDto.nome ?? aluno.nome;
    aluno.matricula = updateEstudanteDto.matricula ?? aluno.matricula;
    return this.repository.updateEstudante(cpf, aluno);
  }

  remove(id: string) {
    return this.repository.deleteEstudante(id);
  }
}

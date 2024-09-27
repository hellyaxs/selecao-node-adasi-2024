import { Injectable } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import CursosRepositoryDB from 'src/infra/repository/db/cursosRespository.database';
import CursosEntity from 'src/infra/repository/db/entities/CursoEntity';

@Injectable()
export class CursosService {
  constructor(private readonly repository: CursosRepositoryDB) {}

  create(createCursoDto: CreateCursoDto) {
    const cursoEntity = new CursosEntity();
    cursoEntity.nome = createCursoDto.nome;
    return this.repository.createCurso(cursoEntity);
  }

  findAll() {
    return this.repository.getCursos();
  }

  findOne(id: number) {
    return `This action returns a #${id} curso`;
  }

  update(id: number, updateCursoDto: UpdateCursoDto) {
    return `This action updates a #${id} curso`;
  }

  remove(id: number) {
    return `This action removes a #${id} curso`;
  }
}

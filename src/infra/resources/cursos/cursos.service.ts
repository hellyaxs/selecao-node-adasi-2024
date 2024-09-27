import { Injectable } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import CursosRepositoryDB from 'src/infra/repository/db/cursosRespository.database';
import CursosEntity from 'src/infra/repository/db/entities/CursoEntity';
import { UUID } from 'crypto';

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

  findOne(id: string) {
    return this.repository.getCurso(id);
  }

  update(id: string, updateCursoDto: UpdateCursoDto) {
    return this.repository.updateCurso(
      id,
      new CursosEntity(id as UUID, updateCursoDto.nome),
    );
  }

  remove(id: string) {
    return this.repository.deleteCurso(id);
  }
}

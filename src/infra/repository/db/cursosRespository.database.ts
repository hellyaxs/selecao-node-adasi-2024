import { Repository } from 'typeorm';
import CursosEntity from './entities/CursoEntity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export default class CursosRepositoryDB {
  constructor(
    @InjectRepository(CursosEntity)
    private readonly entityRepository: Repository<CursosEntity>,
  ) {}

  createCurso(data: CursosEntity): Promise<CursosEntity> {
    return this.entityRepository.save(data);
  }

  updateCurso(data: CursosEntity): Promise<CursosEntity> {
    return this.entityRepository.save(data);
  }

  deleteCurso(id: string): void {
    this.entityRepository.delete(id);
  }

  //   getCurso(id: string): Promise<CursosEntity | void> {
  //     return this.entityRepository.findOneBy(id);
  //   }

  getCursos(): Promise<CursosEntity[] | void> {
    return this.entityRepository.find();
  }
}

import { Repository } from 'typeorm';
import CursosEntity from '../entities/CursoEntity';
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

  updateCurso(id: string, data: CursosEntity): Promise<CursosEntity> {
    return this.entityRepository.update(data.id, data).then(() => data);
  }

  deleteCurso(id: string): void {
    this.entityRepository.delete(id);
  }

  getCursoById(id: string): Promise<CursosEntity> {
    return this.entityRepository.findOneBy({ id } as { id: string });
  }

  getCurso(nome: string): Promise<CursosEntity> {
    return this.entityRepository.findOneBy({ nome } as { nome: string });
  }

  getCursos(): Promise<CursosEntity[] | void> {
    return this.entityRepository.find();
  }
}

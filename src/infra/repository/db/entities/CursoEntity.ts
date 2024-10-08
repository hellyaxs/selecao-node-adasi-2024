import { Cursos } from 'src/domain/cursos/cursos';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import EstudanteEntity from './EstudanteEntity';
import { IsUUID } from 'class-validator';
import { UUID } from 'crypto';

@Entity('cursos')
export default class CursosEntity {
  @PrimaryColumn()
  @IsUUID()
  id: UUID;

  @Column({ nullable: false, unique: true })
  nome: string;

  @OneToMany(() => EstudanteEntity, (estudante) => estudante.curso)
  estudantes: EstudanteEntity[];

  constructor(id?: string, nome?: string) {
    this.id = id as UUID;
    this.nome = nome;
  }

  public static fromDomain(curso: Cursos): CursosEntity {
    return new CursosEntity(curso.id, curso.nome);
  }

  public static toDomain(cursoEntity: CursosEntity): Cursos {
    return new Cursos(cursoEntity.id, cursoEntity.nome);
  }
}

import { randomUUID, UUID } from 'crypto';
import { Cursos } from 'src/domain/cursos/cursos';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import EstudanteEntity from './EstudanteEntity';

@Entity('cursos')
export default class CursosEntity {
  @PrimaryColumn()
  id: UUID;

  @Column({ nullable: false })
  nome: string;

  @OneToMany(() => EstudanteEntity, (estudante) => estudante.curso)
  estudantes: EstudanteEntity[];

  constructor(id?: UUID, nome?: string) {
    this.id = id ?? randomUUID();
    this.nome = nome;
  }

  public static fromDomain(curso: Cursos): CursosEntity {
    return new CursosEntity(curso.id, curso.nome);
  }

  public static toDomain(cursoEntity: CursosEntity): Cursos {
    return new Cursos(cursoEntity.id, cursoEntity.nome);
  }
}

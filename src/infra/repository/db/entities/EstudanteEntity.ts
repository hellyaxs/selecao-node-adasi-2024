import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import CursosEntity from './CursoEntity';
import { Estudante } from 'src/domain/estudante/estudante';

@Entity('estudantes')
export default class EstudanteEntity {
  static fromDomain(estudante: Estudante): EstudanteEntity {
    return new EstudanteEntity(
      estudante.cpf,
      estudante.nome,
      CursosEntity.fromDomain(estudante.curso),
      estudante.matricula,
    );
  }
  static toDomain(estudante: EstudanteEntity): Estudante {
    return new Estudante(
      estudante.cpf,
      estudante.nome,
      CursosEntity.toDomain(estudante.curso),
      estudante.matricula,
    );
  }
  constructor(
    cpf: string,
    nome: string,
    curso: CursosEntity,
    matricula: string,
  ) {
    this.cpf = cpf;
    this.nome = nome;
    this.curso = curso;
    this.matricula = matricula;
  }

  @PrimaryColumn()
  cpf: string;

  @Column({ nullable: false })
  nome: string;

  @ManyToOne(() => CursosEntity, (curso) => curso.estudantes)
  curso: CursosEntity;

  @Column({ nullable: false, unique: true })
  matricula: string;
}

import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import CursosEntity from './CursoEntity';
import { Estudante } from 'src/domain/estudante/estudante';

@Entity('estudantes')
export default class EstudanteEntity {
  static fromDomain(estudante: Estudante): EstudanteEntity {
    return new EstudanteEntity();
  }
  static toDomain(estudante: EstudanteEntity): Estudante {
    return new Estudante(
      estudante.cpf,
      estudante.nome,
      CursosEntity.toDomain(estudante.curso),
      estudante.matricula,
    );
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

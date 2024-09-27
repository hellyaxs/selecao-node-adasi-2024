import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import CursosEntity from './CursoEntity';

@Entity('estudante')
export default class EstudanteEntity {
  @PrimaryColumn()
  cpf: string;

  @Column({ nullable: false })
  nome: string;

  @ManyToOne(() => CursosEntity, (curso) => curso.estudantes)
  curso: CursosEntity;

  @Column({ nullable: false })
  matricula: string;
}

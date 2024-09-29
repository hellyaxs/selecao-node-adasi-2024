import { Cursos } from '../cursos/cursos';

export class Estudante {
  static create(cpf: string, curso: Cursos, nome: string, matricula: string) {
    return new Estudante(cpf, nome, curso, matricula);
  }
  cpf: string;
  nome: string;
  curso: Cursos;
  matricula: string;

  constructor(cpf: string, nome?: string, curso?: Cursos, matricula?: string) {
    this.cpf = cpf;
    this.nome = nome;
    this.curso = curso;
    this.matricula = matricula;
  }
}

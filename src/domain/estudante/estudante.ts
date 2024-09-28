import { Cursos } from '../cursos/cursos';

export class Estudante {
  cpf: string;
  nome: string;
  curso: Cursos;
  matricula: string;

  constructor(cpf: string, nome: string, curso: Cursos, matricula: string) {
    this.cpf = cpf;
    this.nome = nome;
    this.curso = curso;
    this.matricula = matricula;
  }
}

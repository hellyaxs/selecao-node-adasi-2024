import { UUID } from 'crypto';
import { v4 as uuidv4 } from 'uuid';

export class Cursos {
  id: string;
  nome: string;

  constructor(id: string, nome: string) {
    this.id = id;
    this.nome = nome;
  }

  static create(nome: string): Cursos {
    return new Cursos(uuidv4(), nome); // Gera um UUID automaticamente
  }
}

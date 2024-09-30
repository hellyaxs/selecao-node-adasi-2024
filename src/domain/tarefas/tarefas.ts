import { UUID } from 'crypto';
import { v4 as uuidv4 } from 'uuid';
export class Tarefas {
  id: UUID;
  nome: string;

  constructor(id: string, nome?: string) {
    this.id = id as UUID;
    this.nome = nome;
  }
  static create(nome: string): Tarefas {
    return new Tarefas(uuidv4(), nome); // Gera um UUID automaticamente
  }
}

import { UUID } from 'crypto';

export class Tarefas {
  id: UUID;
  nome: string;

  constructor(id: string, nome: string) {
    this.id = id as UUID;
    this.nome = nome;
  }
}

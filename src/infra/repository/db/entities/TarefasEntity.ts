import { Tarefas } from 'src/domain/tarefas/tarefas';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('tarefas')
export default class TarefasEntity {
  static fromDomain(data: Tarefas): any {
    return new TarefasEntity(data.id, data.nome);
  }
  static toDomain(tarefa: TarefasEntity): Tarefas {
    return new Tarefas(tarefa.id, tarefa.nome);
  }
  @PrimaryColumn()
  id: string;

  @Column()
  nome: string;

  constructor(id: string, nome: string) {
    this.id = id;
    this.nome = nome;
  }
}

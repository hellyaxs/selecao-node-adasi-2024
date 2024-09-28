import { IsUUID } from 'class-validator';
import { Tarefas } from 'src/domain/tarefas/tarefas';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('tarefas')
export default class TarefasEntity {
  static toDomain(tarefa: TarefasEntity): Tarefas {
    return new Tarefas(tarefa.id, tarefa.nome);
  }
  @PrimaryColumn()
  @IsUUID()
  id: string;

  @Column()
  nome: string;
}

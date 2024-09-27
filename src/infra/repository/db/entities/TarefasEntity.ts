import { UUID } from 'crypto';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('tarefas')
export default class TarefasEntity {
  @PrimaryColumn()
  id: UUID;

  @Column()
  nome: string;
}

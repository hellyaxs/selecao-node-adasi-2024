import { Tarefas } from 'src/domain/tarefas/tarefas';

export default interface TarefasRepository {
  createTarefa(data: Tarefas): Promise<Tarefas>;
  updateTarefa(data: Tarefas): Promise<Tarefas>;
  deleteTarefa(id: string): Promise<void>;
  getTarefa(id: string): Promise<Tarefas | null>;
  getTarefas(): Promise<Tarefas[]>;
}

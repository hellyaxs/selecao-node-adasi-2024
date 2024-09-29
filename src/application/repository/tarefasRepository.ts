import { Tarefas } from 'src/domain/tarefas/tarefas';

export default interface TarefasRepository {
  createTarefa(data: Tarefas): Promise<Tarefas>;
  updateTarefa(id: string, data: Tarefas): Promise<Tarefas>;
  deleteTarefa(id: string): Promise<void>;
  getTarefa(id: string): Promise<Tarefas>;
  getTarefas(): Promise<Tarefas[]>;
}

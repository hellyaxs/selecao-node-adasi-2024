import { Estudante } from '../estudante/estudante';
import { Tarefas } from '../tarefas/tarefas';

export class Atividades {
  id: number;
  tarefa: Tarefas;
  estuante: Estudante;
  data: Date;
  horario_agendado_inicio: Date;
  horario_agendado_termino: Date;
  horario_de_incio?: Date;
  horario_de_termino?: Date;
}

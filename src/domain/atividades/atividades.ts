import { randomUUID, UUID } from 'crypto';
import { Estudante } from '../estudante/estudante';
import { Tarefas } from '../tarefas/tarefas';

export class Atividades {
  id: UUID;
  tarefa: Tarefas;
  estudante: Estudante;
  data: Date;
  horario_agendado_inicio: Date;
  horario_agendado_termino: Date;
  horario_de_incio?: Date;
  horario_de_termino?: Date;
  constructor(
    id: string,
    tarefa: Tarefas,
    estudante: Estudante,
    data: Date,
    horario_agendado_inicio: Date,
    horario_agendado_termino: Date,
    horario_de_incio?: Date,
    horario_de_termino?: Date,
  ) {
    this.id = (id as UUID) ?? randomUUID();
    this.tarefa = tarefa;
    this.estudante = estudante;
    this.data = data;
    this.horario_agendado_inicio = horario_agendado_inicio;
    this.horario_agendado_termino = horario_agendado_termino;
    this.horario_de_incio = horario_de_incio;
    this.horario_de_termino = horario_de_termino;
  }
}

import { Atividades } from 'src/domain/atividades/atividades';
import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';
import TarefasEntity from './TarefasEntity';
import EstudanteEntity from './EstudanteEntity';

@Entity('atividades')
export default class AtividadeEntity {
  @PrimaryColumn()
  private id: string;

  @OneToOne(() => TarefasEntity)
  private tarefa: TarefasEntity;

  @OneToOne(() => EstudanteEntity)
  private estudante: EstudanteEntity;

  @Column({ type: 'date' })
  private horario_agendado_inicio: Date;
  @Column({ type: 'date' })
  private horario_agendado_termino: Date;
  @Column({ type: 'date' })
  private horario_de_incio?: Date;
  @Column({ type: 'date' })
  private horario_de_termino?: Date;

  // constructor(
  //   id: string,
  //   tarefa: TarefasEntity,
  //   estudante: EstudanteEntity,
  //   horario_agendado_inicio: Date,
  //   horario_agendado_termino: Date,
  //   horario_de_incio?: Date,
  //   horario_de_termino?: Date,
  // ) {
  //   this.id = id;
  //   this.tarefa = tarefa;
  //   this.estudante = estudante;
  //   this.horario_agendado_inicio = horario_agendado_inicio;
  //   this.horario_agendado_termino = horario_agendado_termino;
  //   this.horario_de_incio = horario_de_incio;
  //   this.horario_de_termino = horario_de_termino;
  // }

  public static fromDomain(atividade: Atividades): AtividadeEntity {
    return new AtividadeEntity(
    // atividade.id,
      // atividade.tarefa,
      // atividade.estudante,
      // atividade.horario_agendado_inicio,
      // atividade.horario_agendado_termino,
      // atividade.horario_de_incio,
      // atividade.horario_de_termino,
    );
  }

  public static toDomain(atividadeEntity: AtividadeEntity): Atividades {
    atividadeEntity.id = '12';
    return new Atividades();
  }
}

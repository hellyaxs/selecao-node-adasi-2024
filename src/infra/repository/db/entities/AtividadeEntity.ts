import { Atividades } from 'src/domain/atividades/atividades';
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import TarefasEntity from './TarefasEntity';
import EstudanteEntity from './EstudanteEntity';
import { UUID } from 'crypto';

@Entity('atividades')
export default class AtividadeEntity {
  @PrimaryColumn()
  private id: UUID;

  @OneToOne(() => TarefasEntity, { eager: false })
  @JoinColumn()
  private tarefa: TarefasEntity;

  @OneToOne(() => EstudanteEntity, { eager: false })
  @JoinColumn()
  private estudante: EstudanteEntity;

  @Column({ type: 'timestamp' })
  private horario_agendado_inicio: Date;
  @Column({ type: 'timestamp' })
  private horario_agendado_termino: Date;
  @Column({ type: 'timestamp' })
  private horario_de_inicio?: Date;
  @Column({ type: 'timestamp' })
  private horario_de_termino?: Date;

  constructor(
    id: string,
    tarefa: TarefasEntity,
    estudante: EstudanteEntity,
    horario_agendado_inicio: Date,
    horario_agendado_termino: Date,
    horario_de_inicio?: Date,
    horario_de_termino?: Date,
  ) {
    this.id = id as UUID;
    this.tarefa = tarefa;
    this.estudante = estudante;
    this.horario_agendado_inicio = horario_agendado_inicio;
    this.horario_agendado_termino = horario_agendado_termino;
    this.horario_de_inicio = horario_de_inicio;
    this.horario_de_termino = horario_de_termino;
  }

  public static fromDomain(atividade: Atividades): AtividadeEntity {
    return new AtividadeEntity(
      atividade.id,
      TarefasEntity.fromDomain(atividade.tarefa),
      EstudanteEntity.fromDomain(atividade.estudante),
      atividade.horario_agendado_inicio,
      atividade.horario_agendado_termino,
      atividade.horario_de_incio,
      atividade.horario_de_termino,
    );
  }

  public static toDomain(atividadeEntity: AtividadeEntity): Atividades {
    return new Atividades(
      atividadeEntity.id,
      TarefasEntity.toDomain(atividadeEntity.tarefa),
      EstudanteEntity.toDomain(atividadeEntity.estudante),
      atividadeEntity.horario_agendado_inicio,
      atividadeEntity.horario_agendado_termino,
      atividadeEntity.horario_de_inicio,
      atividadeEntity.horario_de_termino,
    );
  }
}

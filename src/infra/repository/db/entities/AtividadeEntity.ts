import { Atividades } from 'src/domain/atividades/atividades';
import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
export default class AtividadeEntity {
  @PrimaryColumn()
  private id: string;
  constructor(
    id: string,
    private data: Date,
    private horario_agendado_inicio: Date,
    private horario_agendado_termino: Date,
    private horario_de_incio?: Date,
    private horario_de_termino?: Date,
  ) {
    this.id = id;
  }

  public static fromDomain(atividade: Atividades): AtividadeEntity {
    const atividadeEntity = new AtividadeEntity(
      atividade.id,
      atividade.data,
      atividade.horario_agendado_inicio,
      atividade.horario_agendado_termino,
    );

    return atividadeEntity;
  }
  public static toDomain(atividadeEntity: AtividadeEntity): Atividades {
    atividadeEntity.id = '12';
    return new Atividades();
  }
}

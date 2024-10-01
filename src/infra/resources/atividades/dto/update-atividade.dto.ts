import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateAtividadeDto } from './create-atividade.dto';
import { Atividades } from 'src/domain/atividades/atividades';

export class UpdateAtividadeDto extends OmitType(
  PartialType(CreateAtividadeDto),
  [
    'tarefaId',
    'estudanteId',
    'horario_agendado_inicio',
    'horario_agendado_termino',
  ] as const,
) {
  static toDomain(updateAtividadeDto: UpdateAtividadeDto): Atividades {
    return new Atividades(
      null,
      null,
      null,
      updateAtividadeDto.data,
      null,
      null,
      updateAtividadeDto.horario_de_inicio,
      updateAtividadeDto.horario_de_termino,
    );
  }
}

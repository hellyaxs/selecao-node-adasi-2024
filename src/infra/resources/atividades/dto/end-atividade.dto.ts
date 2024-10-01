import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateAtividadeDto } from './create-atividade.dto';

export class EndAtividadeDto extends OmitType(PartialType(CreateAtividadeDto), [
  'tarefaId',
  'estudanteId',
  'data',
  'horario_agendado_inicio',
  'horario_agendado_termino',
  'horario_de_inicio',
] as const) {}

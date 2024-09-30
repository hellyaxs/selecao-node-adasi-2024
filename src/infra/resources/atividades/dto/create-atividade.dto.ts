import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Atividades } from 'src/domain/atividades/atividades';
import { Transform } from 'class-transformer';
import * as moment from 'moment';
import { Estudante } from 'src/domain/estudante/estudante';
import { Tarefas } from 'src/domain/tarefas/tarefas';

export class CreateAtividadeDto {
  @ApiProperty({
    description: 'tarefaId',
    example: 'c11f0fc1-d0b9-45bd-913b-77a0fb9e8fae',
  })
  @IsString()
  tarefaId: string;

  @ApiProperty({
    description: 'estudanteId',
    example: '000.000.000-00',
  })
  @IsString()
  estudanteId: string;

  @ApiProperty({
    description: 'Data da atividade',
    example: '2024-09-27T10:00:00Z',
    type: String,
    format: 'date-time',
  })
  @Transform(({ value }) => moment(value).toISOString(true))
  data: Date;

  @ApiProperty({
    description: 'Horário agendado de início',
    example: '2024-09-27T10:00:00Z',
    type: String,
    format: 'date-time',
  })
  @Transform(({ value }) => moment(value).toISOString(true))
  horario_agendado_inicio: Date;

  @ApiProperty({
    description: 'Horário agendado de término',
    example: '2024-09-27T12:00:00Z',
    type: String,
    format: 'date-time',
  })
  @Transform(({ value }) => moment(value).toISOString(true))
  horario_agendado_termino: Date;

  @ApiProperty({
    description: 'Horário real de início (opcional)',
    example: '2024-09-27T10:15:00Z',
    type: String,
    format: 'date-time',
    required: false,
  })
  @Transform(({ value }) => (value ? moment(value).toISOString(true) : null))
  horario_de_incio?: Date;

  @ApiProperty({
    description: 'Horário real de término (opcional)',
    example: '2024-09-27T12:15:00Z',
    type: String,
    format: 'date-time',
    required: false,
  })
  @Transform(({ value }) => (value ? moment(value).toISOString(true) : null))
  horario_de_termino?: Date;

  static toDomain(createAtividadeDto: CreateAtividadeDto): Atividades {
    return new Atividades(
      null, //id
      new Tarefas(createAtividadeDto.tarefaId), // Tarefas
      new Estudante(createAtividadeDto.estudanteId), // Estudante
      createAtividadeDto.data,
      createAtividadeDto.horario_agendado_inicio,
      createAtividadeDto.horario_agendado_termino,
      createAtividadeDto.horario_de_incio,
      createAtividadeDto.horario_de_termino,
    );
  }
}

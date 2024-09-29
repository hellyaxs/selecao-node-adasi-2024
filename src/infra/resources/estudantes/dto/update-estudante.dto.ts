import { ApiPropertyOptional, OmitType, PartialType } from '@nestjs/swagger';
import { CreateEstudanteDto } from './create-estudante.dto';

export class UpdateEstudanteDto extends OmitType(
  PartialType(CreateEstudanteDto),
  ['cpf', 'cursoId'] as const,
) {
  @ApiPropertyOptional({
    example: 'João da Silva',
    description: 'Nome do estudante',
  })
  nome?: string;

  @ApiPropertyOptional({
    example: '20231029348',
    description: 'Matrícula do estudante',
  })
  matricula?: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateTarefaDto {
  @ApiProperty({
    description: 'Nova tarefa',
    example: 'responder questionario no site',
  }) // Adiciona detalhes para o Swagger
  @IsString()
  nome: string;
}

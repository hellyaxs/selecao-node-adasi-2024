import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Cursos } from 'src/domain/cursos/cursos';
import { Estudante } from 'src/domain/estudante/estudante';

export class CreateEstudanteDto {
  @ApiProperty({ description: 'cpf', example: '000.000.000-00' }) // Adiciona detalhes para o Swagger
  @IsString() // Validação opcional para garantir que o valor seja uma string
  cpf: string;

  @ApiProperty({ description: 'Nome', example: 'jose antonio' })
  nome: string;

  @ApiProperty({ description: 'id do curso', example: 'Curso de NestJS' })
  cursoId: string;

  cursoNome?: string;

  @ApiProperty({ description: 'matricula', example: '63565h5' })
  matricula: string;

  public static toDomain(createEstuanteDto: CreateEstudanteDto) {
    return Estudante.create(
      createEstuanteDto.cpf,
      new Cursos(createEstuanteDto.cursoId, createEstuanteDto.cursoNome),
      createEstuanteDto.nome,
      createEstuanteDto.matricula,
    );
  }
}

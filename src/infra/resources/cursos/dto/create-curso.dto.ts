import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Cursos } from 'src/domain/cursos/cursos';

export class CreateCursoDto {
  @ApiProperty({ description: 'Nome do curso', example: 'Curso de NestJS' }) // Adiciona detalhes para o Swagger
  @IsString() // Validação opcional para garantir que o valor seja uma string
  nome: string;

  public static toDomain(createCursoDto: CreateCursoDto) {
    return Cursos.create(createCursoDto.nome);
  }
}

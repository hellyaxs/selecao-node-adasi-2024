import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCursoDto } from './create-curso.dto';
import { Cursos } from 'src/domain/cursos/cursos';
import { IsString } from 'class-validator';

export class UpdateCursoDto extends PartialType(CreateCursoDto) {
  @ApiProperty({
    description: 'Novo nome do curso',
    example: 'novo curso de nodejs',
  })
  @IsString() // Validação opcional para garantir que o valor seja uma string
  nome: string;

  public static toDomain(createCursoDto: UpdateCursoDto) {
    return Cursos.create(createCursoDto.nome);
  }
}

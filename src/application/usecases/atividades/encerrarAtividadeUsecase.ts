import { BadRequestException, Inject } from '@nestjs/common';
import AtividadesRepository from 'src/application/repository/atividadesRepository';
import { Atividades } from 'src/domain/atividades/atividades';

export default class finalizarAtividadeUsecase {
  constructor(
    @Inject('atividadesRepository')
    private readonly atividadesRepository: AtividadesRepository,
  ) {}

  async execute(horario_end: Date, atividade: Atividades): Promise<Atividades> {
    if (!atividade.horario_de_incio) {
      throw new BadRequestException(
        `A atividade ainda não iniciada, não é possível finalizá-la.`,
      );
    }
    atividade.horario_de_termino = horario_end;
    return await this.atividadesRepository.updateAtividade(
      atividade.id,
      atividade,
    );
  }
}

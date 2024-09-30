import { BadRequestException, Inject } from '@nestjs/common';
import AtividadesRepository from 'src/application/repository/atividadesRepository';
import { Atividades } from 'src/domain/atividades/atividades';
const dayjs = require('dayjs');

export default class IniciarAtividadeUsecase {
  constructor(
    @Inject('atividadesRepository')
    private readonly atividadesRepository: AtividadesRepository,
  ) {}

  async execute(
    horario_start: Date,
    atividade: Atividades,
  ): Promise<Atividades> {
    const horarioAtual = dayjs(horario_start);
    const horarioAgendado = dayjs(atividade.horario_agendado_inicio);

    // Tolerância de 15 minutos para mais ou para menos
    const limiteInferior = horarioAgendado.subtract(15, 'minutes');
    const limiteSuperior = horarioAgendado.add(15, 'minutes');

    if (
      horarioAtual.isBefore(limiteInferior) ||
      horarioAtual.isAfter(limiteSuperior)
    ) {
      throw new BadRequestException(
        `A atividade só pode ser iniciada dentro de uma tolerância de 15 minutos para mais ou para menos.`,
      );
    }
    atividade.horario_de_incio = horario_start;
    return await this.atividadesRepository.updateAtividade(
      atividade.id,
      atividade,
    );
  }
}

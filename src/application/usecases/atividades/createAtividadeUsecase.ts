import { BadRequestException, Inject } from '@nestjs/common';
const dayjs = require('dayjs');
import AtividadesRepository from 'src/application/repository/atividadesRepository';
import { Atividades } from 'src/domain/atividades/atividades';

export default class CreateAtividadeUsecase {
  constructor(
    @Inject('atividadesRepository')
    private readonly atividadesRepository: AtividadesRepository,
  ) {}

  async execute(atividade: Atividades): Promise<Atividades> {
    if (
      dayjs(atividade.horario_agendado_termino).diff(
        dayjs(atividade.horario_agendado_inicio),
        'hour',
      ) > 6
    ) {
      throw new BadRequestException(
        'Sua atividade não pode ser criada, pois ultrapassou o tempo limite de 6 horas',
      );
    }
    const inicio = dayjs(atividade.horario_agendado_inicio);
    const fim = dayjs(atividade.horario_agendado_termino);
    if (fim.isBefore(inicio)) {
      throw new BadRequestException(
        'Data e hora de término não podem ser anteriores à data e hora de início.',
      );
    }

    return this.atividadesRepository.createAtividade(atividade);
  }
}

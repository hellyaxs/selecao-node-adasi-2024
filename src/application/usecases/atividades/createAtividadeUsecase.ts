import { BadRequestException, Inject } from '@nestjs/common';
import dayjs from 'dayjs';
import AtividadesRepository from 'src/application/repository/atividadesRepository';
import { Atividades } from 'src/domain/atividades/atividades';

export default class CreateAtividadeUsecase {
  constructor(
    @Inject('atividadesRepository')
    private readonly atividadesRepository: AtividadesRepository,
  ) {}

  async execute(atividade: Atividades): Promise<Atividades> {
    if (
      atividade.horario_agendado_inicio.getHours() -
        atividade.horario_agendado_termino.getHours() >
      6
    ) {
      throw new Error(
        'sua ativiade não pode ser criada, pois utrapassou o tempo limite de 6hrs',
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

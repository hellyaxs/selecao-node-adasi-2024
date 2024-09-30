import { Atividades } from 'src/domain/atividades/atividades';

export default interface AtividadesRepository {
  createAtividade(data: Atividades): Promise<Atividades>;
  updateAtividade(id: string, data: Atividades): Promise<Atividades>;
  deleteAtividade(id: string): void;
  getAtividade(id: string): Promise<Atividades | void>;
  getAtividades(): Promise<Atividades[] | void>;
}

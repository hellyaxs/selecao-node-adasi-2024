import { Estudante } from 'src/domain/estudante/estudante';

export default interface EstudanteRepository {
  createEstudante(data: Estudante): Promise<Estudante>;
  updateEstudante(cpf: string, data: Estudante): Promise<Estudante>;
  deleteEstudante(id: string): Promise<any>;
  getEstudante(id: string): Promise<Estudante | void>;
  getEstudantes(): Promise<Estudante[] | void>;
}

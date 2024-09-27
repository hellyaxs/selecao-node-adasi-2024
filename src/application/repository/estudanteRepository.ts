import { Estudante } from 'src/domain/estudante/estudante';

export default interface EstudanteRepository {
  createEstudante(data: Estudante): Promise<Estudante>;
  updateEstudante(data: Estudante): Promise<Estudante>;
  deleteEstudante(id: string): Promise<any>;
  getEstudante(id: string): Promise<Estudante | null>;
  getEstudantes(): Promise<Estudante[]>;
}

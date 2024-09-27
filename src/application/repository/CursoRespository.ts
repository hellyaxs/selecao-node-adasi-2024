import { Cursos } from 'src/domain/cursos/cursos';

export default interface CursoRepository {
  createCurso(data: Cursos): Promise<Cursos>;
  updateCurso(data: Cursos): Promise<Cursos>;
  deleteCurso(id: string): Promise<any>;
  getCurso(id: string): Promise<Cursos | null>;
  getCursos(): Promise<Cursos[]>;
}

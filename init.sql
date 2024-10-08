CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
 
CREATE TABLE IF NOT EXISTS "tarefas" (
    "id" uuid PRIMARY KEY,
    "nome" varchar NOT NULL);
  
CREATE TABLE IF NOT EXISTS "cursos" (
    "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    "nome" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "estudantes" (
    "cpf" varchar PRIMARY KEY,
    "nome" varchar NOT NULL,
    "matricula" varchar NOT NULL UNIQUE,
    "cursoId" uuid,
    FOREIGN KEY ("cursoId") REFERENCES "cursos"("id") ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS "atividades" (
    "id" uuid PRIMARY KEY,
    "data" timestamp,
    "horario_agendado_inicio" timestamp NOT NULL,
    "horario_agendado_termino" timestamp NOT NULL,
    "horario_de_inicio" timestamp,
    "horario_de_termino" timestamp,
    "tarefaId" uuid,
    "estudanteCpf" varchar,
    FOREIGN KEY ("tarefaId") REFERENCES "tarefas"("id") ON DELETE SET NULL,
    FOREIGN KEY ("estudanteCpf") REFERENCES "estudantes"("cpf") ON DELETE SET NULL
);

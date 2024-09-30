FROM node:21.5

WORKDIR /usr/src/app

COPY package*.json ./

# Instalando as dependências
RUN npm install

# Copiando o restante do código para a imagem
COPY . .

# Compilando o projeto
RUN npm run build

# Executando as migrations
RUN npm run typeorm -- -d ./src/infra/repository/db/typeOrm.migration-config.ts migration:run

# Expondo a porta que o aplicativo irá rodar
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["npm", "run", "start:prod"]

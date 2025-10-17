Inicializar PostgreSQL no Ubuntu (caso necessário):
sudo systemctl start postgresql

------------------------------------
Instalar PRISMA:
npm install prisma --save-dev

------------------------------------
Inicializar o PRISMA:
 - Cria diretorio prisma
 - Cria arquivo schema.prisma
 - Cria o arquivo .env

npx prisma init

------------------------------------
Edite o arquivo schema.prisma para definir o SGBD e as tabelas

------------------------------------
Edite a variável DATABASE_URL no arquivo .env 
para configurar a conexão com a base de dados no SGBD

Exemplo do PostgreSQL: 
DATABASE_URL="postgresql://usuario:senha@localhost:5432/database?schema=public"

------------------------------------
Incialize o servidor do PRISMA (precisa ficar ativo):
npx prisma dev

------------------------------------
Execute o modelo para gerar os arquivos de criação:
npx prisma migrate dev

------------------------------------
Gere a base de dados:
npx prisma generate

------------------------------------
Para visualizar o BD no navegador:
npx prisma studio
 studyNodeJs

Essa API é do curso de ORM com NodeJS. Utilizando o modelo MVC e Sequelize.
 - Sequelize para as operações de CRUD
 - Enviar dados através de parâmetros de requisição HTTP
 - Enviar dados através do corpo da requisição HTTP
 - Criar rotas para cada operação
 - Interpretar o diagrama de banco
 - Associar tabelas através de métodos do Sequelize


## Diversos Comandos utilizados do Sequelize.
- Arquivos de configurações padrões do sequelize: `npx sequelize-cli init`
- Gerando model que cria tabela: `npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string `
- Tabela "descr_nivel: `npx sequelize-cli model:create --name Niveis --attribute descr_nivel:string`
- Tabela "Turmas: `npx sequelize-cli model:create --name Turmas --attributes data_inicio:dateonly `
- Tabela "Matriculas": `npx sequelize-cli model:create --name Matriculas --attributes status:string       ` 
- Migrando tabela pro db: `npx sequelize-cli db:migrate`
- Criando arquivo modelo de dados na tabela: `npx sequelize-cli seed:generate --name demo-pessoas` 
- Arquivo seed tabela "Niveis": `npx sequelize-cli seed:generate --name demo-nivel `
- Arquivo seed tabela "Turmas": `npx sequelize-cli seed:generate --name demo-turmas`
- Arquivo seed tabela "Matriculas": `npx sequelize-cli seed:generate --name demo-matriculas`
- Comando que insere os dados na tabela: `npx sequelize-cli db:seed:all`

## Parâmetros Obrigatórios

Nenhum
## Request

- Endpoint - `http://localhost:3000/`
- Método - `GET`

## Uso
Só de digitar "pessoas" após o endpoint, será efetuado um SELECT no banco de dados.
```
 /pessoas
```

Pode pesquisar pelo id da pessoa.
```
 /pessoas/3
 /pessoas/2
```

Inserir uma pessoa.
```
    No postman: body -> raw -> seleciona json, depois é só colocar o body como o exemplo: 
    {
    "nome": "Joao Pedro",
    "ativo": false,
    "email": "joao@joao.com",
    "role": "estudante"
    }
```

Atualizar uma pessoa.
```
    URl do postman tem que ter uma id de uma pessoa, exemplo:  http://localhost:3000/pessoas/8
    No postman: body -> raw -> seleciona json, depois é só colocar o body o dado que você quer atualizar na pessoa.
    {
    "nome": "Joao Pedro",
    }
```

Deletar uma pessoa.
```
    URl do postman tem que ter uma id da pessoa que será excluída, exemplo:  http://localhost:3000/pessoas/5
```

Pesquisar uma matruica.
```
    URl do postman tem que ter uma id do estudante e da matricula. exemplo:  http://localhost:3000/pessoas/1/matricula/5
```

Inserir uma matruica.
```
    URl do postman tem que ter uma id do estudante exemplo:  http://localhost:3000/pessoas/1/matricula
    E no corpo do body > raw, passar: 

    { 
    "status": "confirmado",
    "turma_id": 4
    }
```

## Retorno

O retorno do body será em JSON!

- Quanto foi encontrado
```json
    {
        "id": 1,
        "nome": "Carla Gomes",
        "ativo": true,
        "email": "carla@carla.com",
        "role": "estudante",
        "createdAt": "2021-08-05T11:23:23.000Z",
        "updatedAt": "2021-08-05T11:23:23.000Z"
    },
```

- Quando não foi encontrado
```json
    {
      "statusCode": 500,
      "message: "
    }
```

- Quando inserir
```json
    {
    "id": 8,
    "nome": "Joao Pedro",
    "ativo": false,
    "email": "joao@joao.com",
    "role": "estudante",
    "updatedAt": "2021-08-05T20:12:43.525Z",
    "createdAt": "2021-08-05T20:12:43.525Z"
    }
```


- Quando atualizar:
Supondo que eu queira colocar o nome de "Joao Siqueira", na pessoa que o nome é "João Pedro"
```json
{
    "id": 8,
    "nome": "Joao Siqueira",
    "ativo": false,
    "email": "joao@joao.com",
    "role": "estudante",
    "createdAt": "2021-08-05T20:12:43.000Z",
    "updatedAt": "2021-08-06T16:45:32.000Z"
}
```

- Quando deletar:

```json
    {
        "Mensagem": `Id ${id} deletado!` 
    }
```


- Quando pesquisa matricula:

```json
    {
    "id": 5,
    "status": "cancelado",
    "createdAt": "2021-08-06T19:20:51.000Z",
    "updatedAt": "2021-08-06T19:20:51.000Z",
    "estudante_id": 1,
    "turma_id": 2
    }
```

- Quando cria matricula:

```json
{
    "id": 7,
    "status": "confirmado",
    "turma_id": 4,
    "estudante_id": 1,
    "updatedAt": "2021-08-06T21:34:08.952Z",
    "createdAt": "2021-08-06T21:34:08.952Z"
}
```


## Observações

- Os comandos de criação de model das tabelas, possuem apenas as colunas daquela própria tabela, as pk ou fk (dados de outras tabelas) são adicionadas depois. Na parte de "associate" dentro do models. Utilizando hasMany e belongsTo. Depois só resta inserir as informações da coluna nos arquivos de migrations.


- Ao realizar comandos para criar arquivos de migração, o Sequelize colocou um número no começo que corresponde à data e horário. Ele vai rodar todas as migrações que estão na pasta na ordem que criamos, por isso que seguimos também essa ordem de criar.
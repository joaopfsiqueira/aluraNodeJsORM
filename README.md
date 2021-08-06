 studyNodeJs

Essa API é do curso de ORM com NodeJS. Utilizando o modelo MVC e Sequelize.


## Diversos Comandos utilizados do Sequelize.
- Arquivos de configurações padrões do sequelize: `npx sequelize-cli init`
- Gerando model que cria tabela: `npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string `
- Migrando tabela pro db: `npx sequelize-cli db:migrate`
- Criando arquivo modelo de dados na tabela: `npx sequelize-cli seed:generate --name demo-pessoas` 
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
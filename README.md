 apiViaCep

Essa API é do curso de ORM com NodeJS. Utilizando o modelo MVC e Sequelize.


## Diversos Comandos utilizados.
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

- Faltando parametros

```json
{
    "status_code": 500,
    "message": "\"logradouro\" is not allowed to be empty",
    "data": {},
}    
```

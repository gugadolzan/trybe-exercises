### Agora, a prática

### Exercício 1

Crie um endpoint `POST /login`

1.  O endpoint deve receber os seguintes dados no corpo da requisição:

```json
{
  "username": "someUsername",
  "password": "somePassword"
}
```

2.  Caso `username` e `password` sejam válidos, retorne um token que atenda às seguintes especificações:
    - Expira em uma hora;
    - Contém, no payload, o nome de usuário informado na request;
    - Contém, no payload, uma propriedade `admin` , com o valor `false` .
3.  Para retornar o token, utilize o seguinte formato no corpo da resposta:

```json
{
  "token": "<JWT aqui>"
}
```

4.  Para que `username` seja válido, seu valor precisa ser uma string alfanumérica de, pelo menos, 5 caracteres.
5.  Para que `password` seja válido, seu valor precisa ser uma string de, pelo menos, 5 caracteres.

### Exercício 2

Altere o endpoint `POST /login` :

1.  Caso `username` seja `admin` e `password` seja `s3nh4S3gur4???` , a chave `admin` no payload do token gerado deve ter o valor `true`

### Exercício 3

Crie o endpoint `/GET /users/me`

1.  O endpoint só pode ser acessado por pessoas autenticadas
2.  Para realizar a autenticação, a requisição deve conter o header `Authorization` , cujo valor deve ser um token válido
3.  Caso o token não exista, retorne o status `401 Unauthorized` , com o seguinte corpo da resposta:

```json
{
  "error": {
    "message": "Token not found"
  }
}
```

4.  Caso aconteça um erro ao validar o token, retorne o status `401 Unauthorized` com o seguinte conteúdo no corpo:

```json
{
  "error": {
    "message": "<mensagem de erro da biblioteca>"
  }
}
```

5.  Caso o token seja válido, retorne o status `200 OK` e, no corpo da resposta, o nome de usuário ao qual aquele token pertence e o valor da propriedade `admin` , no seguinte formato:

```json
{
  "username": "nome de usuario do token",
  "admin": true || false
}
```

6.  Utilize um middleware exclusivo para a autenticação. Armazene-o no arquivo `middlewares/auth.js`

### Exercício 4

Crie o endpoint `/GET /top-secret`

1.  O endpoint só pode ser acessado por pessoas autenticadas.
2.  Apenas tokens contendo, no payload, a propriedade `admin` com o valor `true` têm autorização para acessar esse endpoint.
3.  Caso o token não exista, retorne o status `401 Unauthorized` , com o seguinte corpo da resposta:

```json
{
  "error": {
    "message": "Token not found"
  }
}
```

4.  Caso aconteça um erro ao validar o token, retorne o status `401 Unauthorized` com o seguinte conteúdo no corpo:

```json
{
  "error": {
    "message": "<mensagem de erro da biblioteca>"
  }
}
```

5.  Caso o token seja válido, mas a propriedade `admin` do payload não seja `true` , retorne o status `403 Forbidden` e o seguinte JSON:

```json
{
  "error": {
    "message": "Restricted access"
  }
}
```

6.  Caso o token seja válido e o payload contenha `admin` com o valor `true` , retorne o seguinte JSON:

```json
{
  "secretInfo": "Peter Parker é o Homem-Arannha"
}
```

7.  Para validar se a pessoa é admin, crie um novo middleware no arquivo `middlewares/admin.js` .

### Bônus

### Exercício 1

1.  Crie o endpoint `POST /signup`
2.  O endpoint deve aceitar o seguinte JSON no corpo da requisição:

```json
{
  "username": "MariaCecília_Souza92",
  "password": "%9!%ec0c5w,q%%h9n3k"
}
```

2.  Para validar os campos, considere os mesmos critérios do endpoint `POST /login` ;
3.  Caso `username` já exista, retorne o status `409 Conflict` e o seguinte JSON:

```json
{
  "error": { "message": "user already exists" }
}
```

4.  Caso os campos sejam válidos, armazene os dados no arquivo `models/data/users.json` ;
5.  Ao armazenar os dados recebidos, adicione a propriedade `admin` , que terá seu valor determinado da seguinte forma:
    - Obtenha um número aleatório de 1 a 100 com o seguinte trecho de código: `Math.floor(Math.random() * 100)` ;
    - Caso o número aleatório seja maior que `50` , `admin` deve ser `true` ;
    - Caso o número aleatório seja menor ou igual a `50` , `admin` deve ser `false` .
6.  Após armazenar os novos dados, retorne um token que expire em uma hora e contenha `username` e `admin` no payload. Utilize o seguinte formato na resposta:

```json
{
  "token": "<token gerado aqui>"
}
```

### Exercício 2

2.  Altere o endpoint de login
3.  Antes de gerar o token, verifique se o nome de usuário e a senha informados existem no arquivo `users.json` ;
4.  Não permita mais o login do usuário `admin` com a senha fixa.
5.  Informe, na propriedade `admin` do payload do token, o mesmo valor da propriedade `admin` que está armazenado para aquela pessoa.

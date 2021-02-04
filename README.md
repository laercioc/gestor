# Gestor

Projeto criado para o desafio de desenvolver um sistema de gerenciamento de funcionários.
Esse sistema é composto de um cadastro de funcionários e cadastro de cargos.

## Como instalar

Clone o projeto utilizando o commando:

#### `git clone https://github.com/laercioc/gestor`

Entre na pasta do projeto utilizando o comando

#### `cd gestor`

O primeiro passo é realizar a criação de um banco de dados e configurar o arquivo `.env` com os dados de acesso, o arquivo com as tabelas encontra-se na pasta raiz do projeto, nomeado de `gestor.sql`.

Após a criação do banco de dados, importe o arquivo `gestor.sql` e configure o arquivo `.env`, que fica localizado em: `back-end/.env`

## Iniciando o servidor back-end e o web-app front-end

Você deve realizar a instalação do packges em cada uma das pasta do projetos, tanto para o back-end, quanto para o front-end, para isso você deve utilizar os seguintes comandos em seu terminal:

#### `cd back-end && npm install && npm run start`

Você deverá obter a seguinte messagem: `Server Listen On Port 3333`

Abra uma nova aba do terminal, navegue até a pasta raiz do projeto `gestor` e rode o seguinte comando:

#### `cd front-end && npm install && npm run start`

Pronto, se tudo deu certo, seu navegador deverá abrir uma nova aba na tela principal do app.

## Acessando o administrativo

Utilize o usuário `admin` e a senha `admin` para realizar a autenticação no web-app.

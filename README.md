Este é o quarto projeto no modulo de Back-End da trybe, nele foram trabalhado os conceitos do API Rest, desenvolvendo os endpoints de um C.R.U.D de palestrantes talkers.

Para acessar esse projeto, clone o repositório, acesse a pasta recem clonada e utilize o docker para rodar a aplicação, seguindo os passos abaixo: 
 - git clone git@github.com:FernandaGrein/Backend-project-talk-manager.git
 - cd Backend-project-talk-manager
 - docker-compose up -d
 - docker exec -it talker_manager bash
 - npm install
 - code .
 Depois disso é possível configurar o workbench com base nas informações do docker-compose.yml

 Neste projeto foram cumpridos os seguintes requisitos:
  - Foi criado um endpoint Get que retorna todas as pessoas palestrantes cadastradas.
  - Foi criado um endpoint Get/:id  que lista uma pessoa palestrante com base no id da rota. 
  - Foi criado um endpoint Post/login que recebe um email e uma senha no corpo da requisição e retorna um token.
  - Foi feita a validação dos campos recebidos para o login, retornando um erro caso os dados sejam inválidos.
  - Foi criado um endpoint Post/talker que possibilita cadastrar um novo palestrante.
  - Foi criado um endpoint Put/taler/:id para que seja possível editar uma pessoa palestrante com base no id da rota.
  - Foi criado um endpoint Delete/talker/:id para deletar um palestrante com base no id recebido.
  - E por fim, foi criado um endpoint Get/talker/search?q=value que retornar um array de palestrantes que contenham em seu nome o termo pesquisado.

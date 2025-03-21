# Caso de Teste de Software 

### Descrição dos Testes

&nbsp;&nbsp;&nbsp;&nbsp;Para a elaboração dos casos de teste, desenvolvi uma API simples de gerenciamento de profissionais. A API implementa funcionalidades básicas de CRUD (Create, Read, Update, Delete) para permitir a criação, listagem, atualização e remoção de registros de profissionais. Através destes testes, buscamos garantir que a API esteja operando corretamente, atendendo aos requisitos funcionais alinhados ao projeto e fornecendo respostas adequadas aos diferentes tipos de requisições.

## Caso de Teste 1: Teste de Criação de Profissional (POST)

### **Objetivo:**  
Verificar se a funcionalidade de criação de um novo profissional, utilizando o método POST no endpoint /profissionais, está funcionando corretamente.

### **Pré-condição:**

- O servidor da API deve estar em execução no endereço http://localhost:8000.  
- Não deve existir um profissional com o ID fornecido (ID 3 neste caso).

### **Procedimento de Teste:**  
Passo 1: Enviar uma requisição POST para o endpoint /profissionais com os dados de um novo profissional:

```json
{  
    "id": "3",  
    "nome": "Carlos",  
    "email": "carlos@email.com",  
    "ocupacao": "Fisioterapeuta",  
    "ativo": true  
}
```

Passo 2: Verificar se a resposta da API tem o status code 201 Created.  
Passo 3: Validar que os dados retornados pela API contêm as informações corretas.

### **Resultado Esperado:**  
Status code: 201 Created  
A resposta da API deve retornar o profissional recém-criado com os dados enviados.

### **Resultado Obtido:**

- Status code: 201 Created  
- O profissional foi criado com sucesso.


### **Pós-condição:**  
O profissional foi criado no sistema e agora está disponível para ser acessado por outras rotas, como a busca por ID e listagem de profissionais.

## Caso de Teste 2: Teste de Listagem de Profissionais (GET)

### **Objetivo:**  
Verificar se a funcionalidade de listar todos os profissionais, utilizando o método GET no endpoint /profissionais, está funcionando corretamente. 

### **Pré-condição:**  
O servidor da API deve estar em execução no endereço http://localhost:8000.  
Deve haver pelo menos um profissional previamente criado no sistema.

### **Procedimento de Teste:**  
Passo 1: Enviar uma requisição GET para o endpoint /profissionais.  
Passo 2: Verificar se a resposta da API tem o status code 200 OK.  
Passo 3: Validar se a resposta contém uma lista de profissionais.

### **Resultado Esperado:**

- Status code: 200 OK  
- A resposta deve conter uma lista de profissionais, e o número de profissionais deve ser maior que zero.


### **Resultado Obtido:**

- Status code: 200 OK  
- A lista de profissionais foi retornada com sucesso.

### **Pós-condição:**  
Nenhuma alteração no sistema após a execução deste teste. A listagem de profissionais está acessível.

## Caso de Teste 3: Teste de Busca de Profissional por ID (GET)  

### **Objetivo:**  
Verificar se a funcionalidade de buscar um profissional pelo seu ID, utilizando o método GET no endpoint /profissionais/{id}, está funcionando corretamente. 

### **Pré-condição:**

- O servidor da API deve estar em execução no endereço http://localhost:8000.  
- Um profissional com o ID fornecido (neste caso, o ID 3\) deve existir no sistema.

### **Procedimento de Teste:**  
Passo 1: Enviar uma requisição GET para o endpoint /profissionais/3.  
Passo 2: Verificar se a resposta da API tem o status code 200 OK.  
Passo 3: Validar se os dados retornados pela API correspondem aos dados do profissional com ID 3\.

### **Resultado Esperado:**

- Status code: 200 OK  
- A resposta deve retornar os dados do profissional com ID 3:

```json
{  
    "id": "3",  
    "nome": "Carlos",  
    "email": "carlos@email.com",  
    "ocupacao": "Fisioterapeuta",  
    "ativo": true  
}
```

### **Resultado Obtido:**

- Status code: 200 OK  
- Os dados do profissional foram retornados corretamente.


### **Pós-condição:**  
Nenhuma alteração no sistema após a execução deste teste. O profissional com ID 3 está disponível para futuras buscas.

## Caso de Teste 4: Teste de Atualização de Profissional (PATCH)

### **Objetivo:**  
Verificar se a funcionalidade de atualização de um profissional, utilizando o método PATCH no endpoint /profissionais/{id}, está funcionando corretamente. 

### **Pré-condição:**

- O servidor da API deve estar em execução no endereço http://localhost:8000.  
- Um profissional com o ID fornecido (neste caso, o ID 3\) deve existir no sistema.

### **Procedimento de Teste:**  
Passo 1: Enviar uma requisição PATCH para o endpoint /profissionais/3 com os novos dados para o profissional:  

```json
    {  
        "nome": "Carlos Silva",  
        "email": "carlos.silva@email.com"  
    }  
```

Passo 2: Verificar se a resposta da API tem o status code 200 OK.  
Passo 3: Enviar uma requisição GET para verificar se os dados do profissional foram atualizados corretamente.

### **Resultado Esperado:**

- Status code: 200 OK  
- A resposta do GET após a atualização deve retornar os dados atualizados:

```json
{  
    "id": "3",  
    "nome": "Carlos Silva",  
    "email": "carlos.silva@email.com",  
    "ocupacao": "Fisioterapeuta",  
    "ativo": true  
}
```

### **Resultado Obtido:**

- Status code: 200 OK  
- Os dados do profissional foram atualizados corretamente.


### **Pós-condição:**  
O profissional com ID 3 possui os dados atualizados no sistema.

## Caso de Teste 5: Teste de Remoção de Profissional (DELETE)

### **Objetivo:**   
Verificar se a funcionalidade de remoção de um profissional, utilizando o método DELETE no endpoint /profissionais/{id}, está funcionando corretamente. 

### **Pré-condição:**

- O servidor da API deve estar em execução no endereço http://localhost:8000.  
- Um profissional com o ID fornecido (neste caso, o ID 3\) deve existir no sistema.

### **Procedimento de Teste:**  
Passo 1: Enviar uma requisição DELETE para o endpoint /profissionais/3.  
Passo 2: Verificar se a resposta da API tem o status code 200 OK.  
Passo 3: Enviar uma requisição GET para o endpoint /profissionais/3 para verificar se o profissional foi removido.

### **Resultado Esperado:**

- Status code da resposta DELETE: 200 OK  
- A resposta do GET após a remoção deve ter o status code 404 Not Found.

### **Resultado Obtido:**

- Status code do DELETE: 200 OK  
- O profissional foi removido com sucesso.


### **Pós-condição:**  
O profissional com ID 3 foi removido do sistema e não pode mais ser acessado.


## Como Rodar os Testes

1. Certifique-se de ter o Python instalado e, em seguida, instale a biblioteca requests: `pip install requests`
2. Iniciar a API: No diretório do seu projeto, inicie o servidor da API (por exemplo, usando o comando): `npm start`
3. Certifique-se de que o servidor está rodando em http://localhost:8000.
4. No mesmo diretório onde se encontra o arquivo de teste, execute: `python test_profissionais.py`
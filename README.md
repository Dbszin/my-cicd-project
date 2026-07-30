# my-cicd-project

Projeto introdutório para praticar fundamentos de CI/CD com Node.js, Jest e GitHub Actions.

## Sobre o projeto

O projeto contém uma função simples de soma e um teste automatizado. O workflow do GitHub Actions foi preparado para instalar as dependências e executar a suíte de testes a cada `push` ou pull request direcionado à branch `main`.

## Tecnologias

- Node.js 20+
- JavaScript (CommonJS)
- Jest 30
- GitHub Actions

## Pré-requisitos

- Node.js instalado
- npm disponível no terminal

## Como executar

Clone o repositório e instale as dependências:

```bash
npm ci
```

Execute os testes:

```bash
npm test
```

## Exemplo de uso

```javascript
const { soma } = require('./src/app');

console.log(soma(2, 2)); // 4
```

## Estrutura do projeto

```text
.
├── .github/workflows/pipeline.yml  # Pipeline de CI/CD
├── src/app.js                      # Código da aplicação
├── tests/app.test.js               # Testes automatizados
├── package.json                    # Scripts e dependências
└── README.md                       # Documentação
```

## Integração contínua

O workflow em `.github/workflows/pipeline.yml` define a automação de CI/CD para pull requests e alterações na branch `main`. A intenção é:

1. Baixa o código do repositório.
2. Configura o Node.js 20.
3. Instala as dependências com `npm ci`.
4. Executa os testes com `npm test`.

O estágio de deploy está representado no workflow como exemplo e deve ser conectado ao serviço de hospedagem desejado quando houver um ambiente de produção.

## Licença

Este projeto está distribuído sob a licença ISC, conforme definido em `package.json`.

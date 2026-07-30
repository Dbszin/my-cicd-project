# my-cicd-project

Projeto introdutório para praticar fundamentos de CI/CD com Node.js, Jest e GitHub Actions.

- **Função de soma:** implementa uma operação simples de adição em JavaScript.
- **Testes automatizados:** valida o comportamento da função com Jest.
- **Lint:** verifica o código-fonte com ESLint.
- **Integração contínua:** executa instalação, testes e lint a cada `push` ou pull request para a branch `main`.
- **Deploy demonstrativo:** simula uma etapa de deploy após a aprovação do pipeline na branch `main`.

## Pré-requisitos

- Node.js 20 ou superior
- npm

## Instalação

Depois de clonar o repositório e entrar na pasta do projeto, instale as dependências:

```bash
npm ci
```

## Comandos disponíveis

Execute os testes automatizados:

```bash
npm test
```

Execute o lint do código-fonte:

```bash
npm run lint
```

## Uso

A função `soma` está disponível em `src/app.js`:

```javascript
const { soma } = require('./src/app');

console.log(soma(2, 2)); // 4
```

## Integração contínua

O workflow [`.github/workflows/pipeline.yml`](.github/workflows/pipeline.yml) é executado em:

- alterações enviadas para a branch `main`;
- pull requests direcionados à branch `main`.

O pipeline realiza as seguintes etapas:

1. Baixa o código do repositório.
2. Configura o Node.js 20.
3. Instala as dependências com `npm ci`.
4. Executa os testes com `npm test`.
5. Executa o lint com `npm run lint`.
6. Simula o deploy somente após uma execução bem-sucedida na branch `main`.

## Estrutura do projeto

```text
.
├── .github/workflows/pipeline.yml  # Pipeline de CI/CD
├── src/app.js                      # Função de soma
├── tests/app.test.js               # Teste automatizado
├── package.json                    # Scripts e dependências
└── README.md                       # Documentação do projeto
```

## Licença

Este projeto está distribuído sob a licença ISC, conforme definido em [`package.json`](package.json).

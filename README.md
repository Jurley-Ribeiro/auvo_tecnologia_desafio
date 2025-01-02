# Auvo Tecnologia | Desafio - Automação com Playwright e TypeScript
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE) [![TypeScript](https://img.shields.io/badge/--3178C6?logo=typescript&logoColor=ffffff)](https://www.typescriptlang.org/) 


Este repositório contém uma POC de automação de testes web utilizando **Playwright** e **TypeScript**. O objetivo é fornecer uma estrutura de automação de testes end-to-end para teste, utilizando as melhores práticas, como o **Page Object Model (POM)**, e aproveitando a capacidade do **Playwright** para execução de testes para validar o fluxo de cadastro e pesquisa de produtos em um site público de e-commerce fictício https://www.saucedemo.com/. 

## Sumário 📑

1. [Clonando o Repositório](#clonando-o-repositório)
2. [Dependências Necessárias](#dependências-necessárias)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Comandos do Playwright](#principais-comandos-do-playwright)
5. [Execução de Testes](#como-executar-os-testes)

## Clonando o Repositório 🐙
Para clonar o repositório, execute o seguinte comando:

```bash
git clone https://github.com/Jurley-Ribeiro/auvo_tecnologia_desafio.git

```
Depois de clonar o repositório, acesse a pasta do projeto:

```bash
cd auvo_tecnologia_desafio
```

## Dependências Necessárias 🛠️

### 1. Node.js e npm

O **Node.js** é necessário para rodar o JavaScript no ambiente de testes, e o **npm** é o gerenciador de pacotes utilizado para instalar as dependências do projeto.

Verifique se o **Node.js** e o **npm** estão instalados:

```bash
node -v
npm -v
```
Se não estiverem instalados, baixe e instale a versão mais recente LTS do [site oficial do Node.js](https://nodejs.org).

### 2. Instalar TypeScript e Playwright
Para instalar as dependências globais (caso necessário):
```bash
npm install -g typescript
npm install -g playwright
```
Após isso, instale as dependências do projeto:

```bash
npm install
```
### 3. Outras Dependências
Este projeto também requer a instalação do *TypeScript* e do *Playwright*. Você pode instalar essas dependências localmente através do npm:

```bash
npm install typescript playwright
```

## Estrutura do Projeto 📁

A estrutura do projeto segue a convenção **Page Object Model (POM)** e foi organizada da seguinte forma:

### Diretório Raiz

    .
    ├── node_modules/                  # Dependências instaladas
    ├── page-objects/                  # Contém os Page Objects e lógica de automação
    ├── playwright-report/             # Relatórios gerados pelo Playwright após a execução dos testes
    ├── resources/                     # Arquivos de recursos (como dados I/O, arquivos JSON, etc.)
    ├── test-results/                  # Resultados dos testes executados
    ├── tests/                         # Diretório contendo os testes automatizados
    ├── .gitignore                     # Arquivo para ignorar arquivos/diretórios no Git
    ├── playwright.config.ts           # Configuração do Playwright para definir as configurações de execução dos testes
    ├── package.json                   # Gerenciador de dependências
    ├── README.md                      # Este arquivo de documentação

### Descrição dos Diretórios e Arquivos

- **`node_modules/`**: Contém todas as dependências do projeto, que são instaladas com o comando `npm install`.
- **`page-objects/`**: Contém os arquivos de automação de testes, conhecidos como "Page Objects". Cada página ou componente de interação do site tem seu próprio arquivo de Page Object.
- **`playwright-report/`**: Diretório onde os relatórios de execução dos testes são armazenados.
- **`resources/`**: Contém arquivos de recursos, como dados de entrada, arquivos JSON e outros dados necessários para os testes.
- **`test-results/`**: Diretório com os resultados gerados após a execução dos testes.
- **`tests/`**: Contém os testes automatizados que são executados pelo Playwright.
- **`.gitignore`**: Arquivo que lista os arquivos e pastas a serem ignorados pelo Git.
- **`playwright.config.ts`**: Arquivo de configuração do Playwright, onde são definidas as configurações de execução dos testes (como navegação em diferentes navegadores, contexto).
- **`package.json`**: Arquivo que contém informações sobre o projeto e as dependências do npm.
- **`README.md`**: Arquivo de documentação do projeto (este arquivo).

> **Nota**: As pastas como `node_modules/`, `playwright-report/` e `test-results/` podem ser regeneradas automaticamente, e não precisam ser versionadas com o Git.


## Principais Comandos do Playwright 🚀

O Playwright possui diversos comandos úteis para executar os testes. Abaixo estão os principais comandos do projeto.

### 1. Executar Testes
Para executar todos os testes:

```bash
npx playwright test
```
Este comando executa todos os testes definidos no diretório `auvo_test/auvo_tecnologia_desafio/tests`[^1]

[^1]:
    Por default o Playwright executa os testes em todos os browsers.
    Webkit (Safari), Chromium e Firefox.

### 2. Executar Testes com Chromium
Se você deseja rodar os testes utilizando o navegador Chromium:

```bash
npx playwright test --project=chromium
```

### 3. Mostrar Relatório de Testes
Após rodar os testes, você pode visualizar um relatório de execução com o seguinte comando:

```bash
npx playwright show-report
```

### 4. Executar Testes com Navegador em Modo Headed (Visível)
   Se você deseja rodar os testes com o navegador visível (modo "headed"):

```bash
npx playwright test --project=chromium --headed
```
Isso abrirá o navegador Chromium e permitirá que você visualize os testes sendo executados em tempo real.

### 5. Abrindo o modo UI
Para executar os testes no modo de interface de usuário interativa, com um modo de observação integrado (preview):
```bash
npx playwright test --ui
```
* Para maiores detalhes referentes as opções mais comuns disponíveis na linha de comando, **olhe a documentação oficial do [Playwright - Command line](https://playwright.dev/docs/test-cli)**.

## Como Executar os Testes ⚗️
### Configuração do Playwright
- O arquivo **`playwright.config.ts`** contém as configurações do Playwright, como o navegador a ser utilizado (Chromium, Firefox, WebKit), e outras opções relacionadas ao comportamento dos testes.


## Autor 👩‍💻

Este projeto foi desenvolvido por **Jurley Ribeiro**.


[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-blue?logo=linkedin&logoColor=white&style=flat-square)](https://www.linkedin.com/in/jurley-ribeiro/)
[![GitHub](https://img.shields.io/badge/GitHub-Profile-black?logo=github&logoColor=white&style=flat-square)](https://github.com/Jurley-Ribeiro)

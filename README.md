# Auvo Tecnologia Desafio - Automaçaõ com Playwright e TypeScript
Este repositório contém uma POC de automação de testes web utilizando **Playwright** e **TypeScript**. O objetivo é fornecer uma estrutura de automação de testes end-to-end para teste, utilizando as melhores práticas, como o **Page Object Model (POM)**, e aproveitando a capacidade do **Playwright** para execução de testes para validar o fluxo de cadastro e pesquisa de produtos em um site público de e-commerce fictício https://www.saucedemo.com/. 

## Sumário

1. [Clonando o Repositório](#clonando-o-repositório)
2. [Dependências Necessárias](#dependências-necessárias)
3. [Comandos do Playwright](#principais-comandos-do-playwright)
4. [Execução de Testes](#como-executar-os-testes)

## Clonando o Repositório
-Para clonar o repositório, execute o seguinte comando:

```bash
git clone https://github.com/Jurley-Ribeiro/auvo_tecnologia_desafio.git

- `cd auvo_desafio`
```

## Dependências Necessárias
1. Node.js e npm
O Node.js é necessário para rodar o TS no ambiente de testes, e o npm é o gerenciador de pacotes utilizado para instalar as dependências do projeto.

Verifique se o Node.js e o npm estão instalados:

## Dependências Necessárias

### 1. Node.js e npm

O **Node.js** é necessário para rodar o JavaScript no ambiente de testes, e o **npm** é o gerenciador de pacotes utilizado para instalar as dependências do projeto.

Verifique se o **Node.js** e o **npm** estão instalados:

```bash
node -v
npm -v
```
Se não estiverem instalados, baixe e instale a versão mais recente LTS do [site oficial do Node.js](https://nodejs.org).

## Principais Comandos do Playwright

O Playwright possui diversos comandos úteis para executar os testes. Abaixo estão os principais comandos do projeto.

### 1. Executar Testes

Para executar todos os testes:

```bash
npx playwright test
```
Este comando executa todos os testes definidos no diretório auvo_desafio/tests/.

2. Executar Testes com Chromium
Se você deseja rodar os testes utilizando o navegador Chromium:

```bash
npx playwright test --project=chromium
```

3. Mostrar Relatório de Testes
Após rodar os testes, você pode visualizar um relatório de execução com o seguinte comando:

```bash
npx playwright show-report
```

4. Executar Testes com Navegador em Modo Headed (Visível)
Se você deseja rodar os testes com o navegador visível (modo "headed"):

```bash
npx playwright test --project=chromium --headed
```
Isso abrirá o navegador Chromium e permitirá que você visualize os testes sendo executados em tempo real.

## Como Executar os Testes
# Configuração do Playwright
- O arquivo playwright.config.ts contém as configurações do Playwright, como o navegador a ser utilizado (Chromium, Firefox, WebKit), e outras opções relacionadas ao comportamento dos testes.


## Autor

Este projeto foi desenvolvido por **Jurley Ribeiro**.

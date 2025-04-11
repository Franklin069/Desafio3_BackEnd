# 📋 Projeto de Formulário de Inscrição + Página de Login

Este é um projeto web simples que simula o processo de **inscrição de usuários** com um **formulário completo** e uma **página de login integrada**. Ao preencher o formulário, os dados são armazenados temporariamente no navegador (via `localStorage`), e o usuário é redirecionado para uma página de login onde pode acessar o sistema utilizando o ID e senha cadastrados.

---

## 🚀 Como rodar localmente

Siga os passos abaixo para executar o projeto no seu computador:

1. **Clone o repositório ou copie os arquivos para sua máquina:**
   - Certifique-se de ter os arquivos:  
     `Teste1.html`, `Teste1.js`, `Teste1.css`  
     `Login1.html`, `login1.css`

2. **Abra o projeto:**
   - Você pode abrir diretamente os arquivos `.html` com o navegador:
     - Clique duas vezes em `Teste1.html` para abrir o formulário
     - Após o envio, você será redirecionado para `Login1.html`

3. **Importante:**
   - Todos os arquivos devem estar **na mesma pasta**.
   - O navegador deve estar **habilitado para usar JavaScript** (padrão nos navegadores modernos).

---

## 🛠 Tecnologias Utilizadas

- **HTML5** – estrutura do formulário e da tela de login  
- **CSS3** – estilos visuais e responsividade  
- **JavaScript (ES6)** – validações, manipulação do DOM e `localStorage`

---

## ✨ Principais Funcionalidades

✅ **Formulário de Inscrição**
- Validação de campos obrigatórios (nome, e-mail, CPF, etc.)
- Máscaras de formato (e-mail, CPF, telefone, CEP)
- Armazenamento dos dados via `localStorage`
- Redirecionamento automático para a página de login após inscrição

✅ **Página de Login**
- Campo para digitar **ID do usuário** e **senha**
- Validação dos dados comparando com o que foi salvo no formulário
- Mensagens de erro se o login estiver incorreto
- Redirecionamento (opcional) para uma área autenticada

---

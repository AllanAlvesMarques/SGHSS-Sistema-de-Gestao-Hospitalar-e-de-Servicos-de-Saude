# SGHSS – Sistema de Gestão Hospitalar e de Serviços de Saúde 🏥

Este projeto tem como objetivo centralizar e informatizar os processos clínicos, operacionais e administrativos da instituição **VidaPlus**, que gerencia hospitais, clínicas, laboratórios e equipes de home care.

---

## 🎯 Objetivo

Desenvolver uma API backend funcional, modular e segura que permita:

- Cadastro de pacientes e profissionais de saúde
- Agendamento de consultas e controle de prontuários
- Registro de prescrições digitais e internações
- Gerenciamento de leitos hospitalares
- Autenticação e controle de acesso com JWT
- Conformidade com a **LGPD**

---

## 👥 Principais Usuários

- **Pacientes**: cadastro, agendamento, histórico, prescrições, telemedicina  
- **Profissionais de Saúde**: prontuários, agenda, prescrições digitais  
- **Administradores**: gestão de usuários, internações, leitos, relatórios

---

## ⚙️ Tecnologias Utilizadas

- Node.js + Express
- JWT (JSON Web Token) para autenticação
- `dotenv` para variáveis de ambiente
- `bcryptjs` para hash de senhas
- `cors` e `body-parser` para segurança e tratamento de requisições
- Estrutura modular com controllers, rotas e middlewares

---

## 📁 Funcionalidades da API

| Módulo            | Endpoints Principais                             |
|-------------------|--------------------------------------------------|
| Autenticação      | `POST /api/auth/signup`, `POST /api/auth/login` |
| Pacientes         | `POST /api/pacientes`, `GET /api/pacientes`     |
| Consultas         | `POST /api/consultas`, `GET /api/consultas`     |
| Profissionais     | `POST /api/profissionais`, `GET /api/profissionais` |
| Agenda Profissional | `POST /api/profissionais/:id/agenda`          |
| Leitos & Internações | `POST /api/hospital/leitos`, `POST /api/hospital/internacoes`, `PUT /api/hospital/internacoes/:id/alta` |
| Prescrições       | `POST /api/prescricoes`, `GET /api/prescricoes` |

✅ Todas as rotas (exceto login/signup) são protegidas por token JWT.

---

## 🔐 Segurança e LGPD

- Autenticação via JWT
- Controle de acesso por perfil (paciente, profissional, admin)
- Hash de senhas com `bcryptjs`
- Conformidade com a LGPD (armazenamento e acesso de dados)

---

## ▶️ Como Executar o Projeto

```bash
# Instale as dependências
npm install

# Configure o arquivo .env
PORT=3000
JWT_SECRET=segredo123

# Inicie o servidor
npm start

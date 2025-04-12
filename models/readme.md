# ✅ Lista de Tarefas com Notificação via WhatsApp

Projeto fullstack criado para facilitar a organização de tarefas, com envio automático de mensagens via **API do WhatsApp** após a criação de cada tarefa.

Repositório oficial: [RealDnny/task](https://github.com/RealDnny/task)

---

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- Prisma ORM + SQLite
- Handlebars (templating)
- TailwindCSS
- Axios
- API do WhatsApp (UltraMsg)

---

## 📱 Funcionalidade principal

Ao adicionar uma nova tarefa, o sistema:

- Salva no banco de dados
- Retorna na interface
- Envia uma mensagem automática via WhatsApp com o seguinte conteúdo:

> _"📌 Você criou uma nova tarefa: 'Estudar Node.js'. Não esqueça de realizá-la!"_

---

## 🧠 Como funciona

1. O usuário preenche o campo de tarefa.
2. O backend recebe, armazena e retorna os dados.
3. A API do WhatsApp é chamada com a mensagem personalizada.
4. A tarefa é exibida com um checkbox (para marcar como concluída).

---

## 🖥️ Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/RealDnny/task.git
cd task
npm install
npx prisma migrate dev --name init
npx prisma generate
ULTRA_INSTANCE_ID=xxxxxxxxxx
ULTRA_TOKEN=xxxxxxxxxx
ULTRA_PHONE=55seunumeroaqui
npm run dev
Acesse: http://localhost:8080
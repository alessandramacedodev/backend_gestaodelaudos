# Backend de Laudos Periciais Odontológicos

Este projeto é um backend completo para o gerenciamento de laudos periciais odontológicos. Ele foi desenvolvido com foco em segurança, escalabilidade e integração com aplicações web e mobile.

## Funcionalidades

- Autenticação e autorização de usuários (JWT)
- Gerenciamento de usuários (admin, perito, assistente)
- Gerenciamento de casos periciais
- Upload e gerenciamento de evidências (com imagens e geolocalização)
- Registros odontolegais com busca e comparação (Ante-Mortem vs Post-Mortem)
- Geração de laudos periciais com exportação em PDF
- Dashboards e gráficos analíticos com IA (pizza, pirâmide e linha)
- Documentação da API com Swagger
- Deploy em nuvem (ex: Render, Railway, Vercel functions ou Heroku)

## Tecnologias Utilizadas

- Node.js + Express
- MongoDB + Mongoose (ODM)
- JWT (JSON Web Token) para autenticação
- Multer para upload de arquivos
- PDFKit para geração de PDFs
- Swagger UI para documentação
- Winston para logs customizados

## Instalação e Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/laudos-backend.git
cd laudos-backend

2. Instale as dependencias
npm install

3. Configure as variáveis de ambiente
PORT=3000
MONGO_URI= mongodb+srv://adsalessandramacedo:XK089iec%23@gestaodelaudosbd.rnsw5hb.mongodb.net/?retryWrites=true&w=majority&appName=gestaodelaudosBD
JWT_SECRET= 65d2f5e47556aac6a892e128baeae632f06777290ff13e3a52a649c25a398ca3

4. Inicie o servidor
npm start
A API estará disponível em: http://localhost:5000

Documentação da API
http://localhost:5000/api-docs


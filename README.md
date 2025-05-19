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
MONGO_URI=mongodb+srv://adsalessandramacedo:XK089iec%23@cluster0.rmoiabe.mongodb.net/laudos?retryWrites=true&w=majority
JWT_SECRET=31056eabbc856489ef840f9a3b6d0ab868861a3797ec54a869d71efa83abf88e037722fa05cbf2b3ebc83d514e584cc694fedc9eb047670852e30741a528d647470c90a1214915b8afde154bb0b42e71b1c48861cd76ef6d950ccb64879697237872f5605a73795b38823f9a2ca865b0287191a98785a8b8e3e2381844c2d7437d94076f0944b0d939cba15e00a4f040d5b8c5c255ee62b6cff900ee875f7c41f6a08c4a7ac506713c2bb084b985b02e107595856c31542d4c34615fc18ea9278747082a3e2ef48496574e11b996ae7bf20f20edc8cf501a91132cc4f1f571a2b0635e59c1f866bb2976654685c58e2c8538abc276108aeb55b66da6fd53051a07c027adf0453635da9d1d649aafc9cb87824c6cc25fe05586544faea6e732aeab440b0ab05e60d7379ab79895f09530ec49a259eac64e489c4b459c561c9286


4. Inicie o servidor
npm start
A API estará disponível em: http://localhost:3000

Documentação da API
http://localhost:3000/api-docs


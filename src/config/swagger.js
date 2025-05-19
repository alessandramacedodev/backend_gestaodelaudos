
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API - Sistema de Laudos Periciais Odontológicos',
      version: '1.0.0',
      description: 'Documentação da API para gestão de laudos, casos, usuários, evidências e mais.',
    },
    servers: [
      {
        url: 'http://localhost:5000/api',
        description: 'Servidor Local',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./routes/*.js', './models/*.js', './controllers/*.js'], // Caminhos dos arquivos com anotações Swagger
};

const swaggerSpec = swaggerJsDoc(options);

const swaggerDocs = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log('📝 Documentação Swagger disponível em: /api-docs');
};

module.exports = swaggerDocs;

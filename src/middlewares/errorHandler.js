const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const environment = process.env.NODE_ENV || 'development';

  console.error(`🚨 Erro [${statusCode}]: ${err.message}`);
  if (environment === 'development') {
    console.error(err.stack);
  }

  res.status(statusCode).json({
    mensagem: err.message || 'Erro interno do servidor',
    ...(environment === 'development' && { stack: err.stack }),
  });
};

module.exports = errorHandler;

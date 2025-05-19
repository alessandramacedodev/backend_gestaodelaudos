const jwt = require('jsonwebtoken');

module.exports = (requiredRoles = []) => {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;

    // Verifica se o header existe e começa com "Bearer "
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ mensagem: 'Token não fornecido ou malformado' });
    }

    const token = authHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Verificação mínima dos campos esperados
      if (!decoded || !decoded.id || !decoded.perfil) {
        return res.status(401).json({ mensagem: 'Token inválido ou incompleto' });
      }

      req.usuario = decoded;

      // Verifica se o perfil está entre os permitidos (caso exigido)
      if (requiredRoles.length > 0 && !requiredRoles.includes(decoded.perfil)) {
        return res.status(403).json({ mensagem: 'Acesso negado: perfil não autorizado' });
      }

      next();
    } catch (err) {
      return res.status(401).json({ mensagem: 'Token inválido ou expirado', erro: err.message });
    }
  };
};

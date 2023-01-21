const auth = (req, res, next) => {
    const { token } = req.headers;
    if (!token) {
        res.status(401).json({
            message: 'Token não encontrado',
          });
    }
    if (token.length !== 16) {
        res.status(401).json({
            message: 'Token inválido',
          });
    }
};
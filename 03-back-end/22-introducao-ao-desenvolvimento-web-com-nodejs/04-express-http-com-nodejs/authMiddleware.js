const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || authorization.length !== 16)
    return res.status(401).json({ message: 'Unauthorized' });

  return next();
};

module.exports = authMiddleware;

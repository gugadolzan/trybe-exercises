module.exports = (err, _req, res, _next) => {
  const status = err.status || 500;
  const code = err.code || 'internalError';
  const message = err.message || 'Internal server error';

  if (status === 500) {
    console.error(err);
  }

  res.status(status).json({
    error: {
      code,
      message,
    },
  });
};

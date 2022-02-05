module.exports = (err, _req, res, _next) => {
  if (err.status)
    return res.status(err.status).json({
      error: true,
      message: err.message,
    });

  if (err.isJoi)
    return res
      .status(400)
      .send({ error: true, message: err.details[0].message });

  console.error(err);

  res.status(500).send({ error: true, message: 'Internal server error' });
};

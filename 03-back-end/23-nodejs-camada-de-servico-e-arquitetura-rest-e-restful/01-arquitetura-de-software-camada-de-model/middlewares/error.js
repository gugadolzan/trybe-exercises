module.exports = (err, _req, res, _next) => {
  if (err.isJoi)
    return res
      .status(400)
      .send({ error: true, message: err.details[0].message });

  console.error(err);

  res.status(500).send({ error: true, message: 'Internal server error' });
};

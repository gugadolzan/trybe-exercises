const Joi = require("joi");
const jwt = require("jsonwebtoken");

const { JWT_SECRET } = process.env;

module.exports = async (req, res, next) => {
  const { username, password } = req.body;

  const { error } = Joi.object({
    username: Joi.string().min(5).alphanum().required(),
    password: Joi.string().min(5).required(),
  }).validate({ username, password });

  if (error) return next(error);

  if (username === "admin" && password !== "s3nh4S3gur4???") {
    const err = new Error("Invalid username or password");
    err.statusCode = 401;
    return next(err);
  }

  const admin = username === "admin" && password === "s3nh4S3gur4???";

  const payload = { username, admin };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

  res.status(200).json({ token });
};

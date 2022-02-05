require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const Joi = require('joi');

const app = express();

app.use(bodyParser.json());

app.post('/user', (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const { error } = Joi.object({
    firstName: Joi.string().required().messages({
      'any.required': `"firstName" is a required field`,
    }),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  })
    .messages({
      'string.base': `{#label} should be a type of 'text'`,
      'string.empty': `{#label} cannot be an empty field`,
      'string.email': `{#label} should be a valid email address`,
      'string.min': `{#label} should have a minimum length of {#limit}`,
      'any.required': `{#label} is a required field`,
    })
    .validate({ firstName, lastName, email, password });

  if (error)
    return res
      .status(400)
      .send({ error: true, message: error.details[0].message });

  // create user

  res.status(200).end();
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

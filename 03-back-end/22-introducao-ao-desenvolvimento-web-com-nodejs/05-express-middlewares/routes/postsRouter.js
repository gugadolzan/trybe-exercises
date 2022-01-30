const express = require('express');

const {
  HTTP_STATUS_OK,
  HTTP_STATUS_NOT_FOUND,
  MESSAGE_POST_NOT_FOUND,
} = require('../utils');

const router = express.Router();

const posts = [
  { id: 1, author: 'José Neto', comment: 'Mais um dia de Sol !' },
  { id: 2, author: 'Antonio Neto', comment: 'Hoje o dia está maneiro!' },
  { id: 3, author: 'Rodrigo Garga', comment: 'To aqui também' },
];

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const post = posts.find((post) => `${post.id}` === id);

  if (!post)
    return res.status(HTTP_STATUS_NOT_FOUND).json(MESSAGE_POST_NOT_FOUND);

  res.status(HTTP_STATUS_OK).json(post);
});

module.exports = router;

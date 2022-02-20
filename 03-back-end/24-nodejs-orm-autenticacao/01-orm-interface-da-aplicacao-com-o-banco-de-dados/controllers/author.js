const { Book } = require('../models');

const getByAuthorName = async (req, res) => {
  try {
    const { name } = req.params;
    const books = await Book.findAll({ where: { author: name } });
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getByAuthorName,
};

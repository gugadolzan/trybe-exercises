const { Book } = require('../models');

const findAll = async (_req, res) => {
  try {
    const books = await Book.findAll({
      order: [
        ['title', 'ASC'],
        ['createdAt', 'ASC'],
      ],
    });
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const findById = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);

    if (!book) return res.status(404).json({ error: 'Book not found' });

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const create = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);

    if (!book) return res.status(404).json({ error: 'Book not found' });

    await book.update(req.body);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const remove = async (req, res) => {
  try {
    await Book.destroy({ where: { id: req.params.id } });
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
};

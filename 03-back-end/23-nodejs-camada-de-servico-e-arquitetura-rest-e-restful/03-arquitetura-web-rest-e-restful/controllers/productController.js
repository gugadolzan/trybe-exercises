const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (_req, res) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products);
});

router.get('/:id', async (req, res) => {
  const product = await ProductModel.getById(req.params.id);

  if (product === null) {
    res.status(404).send({ message: 'Produto não encontrado' });
  }

  res.status(200).json(product);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  try {
    const newProduct = await ProductModel.add(name, brand);

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).send({ message: 'Algo deu errado' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await ProductModel.exclude(req.params.id);

    res.status(204).end();
  } catch (error) {
    res.status(500).send({ message: 'Algo deu errado' });
  }
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;

  try {
    await ProductModel.update(req.params.id, name, brand);

    const product = await ProductModel.getById(req.params.id);

    res.status(200).json(product);
  } catch (error) {
    res.status(500).send({ message: 'Algo deu errado' });
  }
});

module.exports = router;

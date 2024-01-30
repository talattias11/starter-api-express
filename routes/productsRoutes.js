const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
	res.json(await Product.find({}));
});

router.get('/:id', async (req, res) => {
	res.json(await Product.findById(req.params.id));
});

router.post('/', async (req, res) => {
	const productToAdd = await Product.create(req.body);
	res.status(201).send(`${productToAdd.name} was added`);
});

router.delete('/:id', async (req, res) => {
	const productToDelete =
		await Product.findByIdAndDelete(req.params.id);
	res.send(`${productToDelete.name} was deleted`);
});

module.exports = router;
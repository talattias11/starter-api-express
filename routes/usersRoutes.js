const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
	res.json(await User.find({}));
});

router.get('/:id', async (req, res) => {
	res.json(await User.findById(req.params.id));
});

router.post('/', async (req, res) => {
	const userToAdd = await User.create(req.body);
	res.status(201).send(`${userToAdd.name} was added`);
});

router.delete('/:id', async (req, res) => {
	const userToDelete =
		await User.findByIdAndDelete(req.params.id);
	res.send(`${userToDelete.name} was deleted`);
});

module.exports = router;
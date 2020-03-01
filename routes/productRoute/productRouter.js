const express = require('express');
const db = require('./productModel.js');
const router = express.Router();

const middleware = require('./middleware.js');

router.get('/', (req, res) => {
	db
		.find()
		.then((products) => {
			res.status(200).json(products);
		})
		.catch((err) => {
			res.status(500).json({ message: 'there was an error getting products' });
		});
});

router.get('/:id', middleware.validateProductId, (req, res) => {
	const id = req.params.id;

	db
		.findById(id)
		.then((product) => {
			res.status(200).json(product);
		})
		.catch((err) => {
			res.status(500).json({ error: 'could not retrieve product' });
		});
});

router.post('/', middleware.validateBody, (req, res) => {
	const body = req.body;

	db
		.insert(body)
		.then((product) => {
			res.status(201).json(body);
		})
		.catch((err) => {
			res.status(500).json({ error: 'failed to create new product' });
		});
});

router.put('/:id', middleware.validateBody, middleware.validateProductId, (req, res) => {
	const changes = req.body;
	const { id } = req.params;

	db
		.update(id, changes)
		.then((record) => {
			res.status(200).json({ message: `record updated ${record}` });
		})
		.catch((err) => {
			res.status(500).json({ error: 'error updating record' });
		});
});

router.delete('/:id', middleware.validateProductId, (req, res) => {
	db
		.remove(req.product.id)
		.then((removed) => {
			res.status(200).json({ message: `product removed ${removed}` });
		})
		.catch((err) => {
			res.status(500).json({ error: 'could not remove product', err });
		});
});

module.exports = router;

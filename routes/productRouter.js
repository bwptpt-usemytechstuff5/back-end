const express = require('express');
const db = require('./productModel.js');
const router = express.Router();

router.get('/', (req, res) => {
	db
		.find()
		.then((products) => {
			res.status(200).json(products);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ message: 'there was an error getting products' });
		});
});

module.exports = router;

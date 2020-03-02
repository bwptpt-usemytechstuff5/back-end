const router = require('express').Router();
const db = require('./ownerModel.js');

router.get('/', (req, res) => {
	db
		.find()
		.then((owners) => {
			res.status(200).json(owners);
		})
		.catch((err) => {
			res.status(500).json({ error: 'could not get owners', err });
		});
});

module.exports = router;

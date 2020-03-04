const router = require('express').Router();
const bcrypt = require('bcryptjs');

const jwt = require('./jwt.js');

const db = require('../ownerRoute/ownerModel.js');

router.post('/register', (req, res) => {
	let owner = req.body;
	const hash = bcrypt.hashSync(owner.password, 12);
	owner.password = hash;

	db
		.add(owner)
		.then((saved) => {
			res.status(201).json({ message: `user added`, saved });
		})
		.catch((error) => {
			res.status(500).json(error);
		});
});

router.post('/login', (req, res) => {
	let { username, password } = req.body;

	db
		.findBy({ username })
		.first()
		.then((owner) => {
			if (owner && bcrypt.compareSync(password, owner.password)) {
				const token = jwt.generateToken(owner);

				res.status(200).json({
					message: `Welcome ${owner.username}!`,
					token
				});
			} else {
				res.status(401).json({ message: 'Invalid Credentials' });
			}
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json(error);
		});
});

module.exports = router;

const router = require('express').Router();
const bcrypt = require('bcryptjs');

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
	console.log(username, password);

	db
		.findBy({ username })
		.first()
		.then((owner) => {
			console.log(owner);
			if (owner && bcrypt.compareSync(password, owner.password)) {
				res.status(200).json({ message: `Welcome ${owner.username}!` });
			} else {
				res.status(401).json({ message: 'Invalid Credentials' });
			}
		})
		.catch((error) => {
			res.status(500).json(error);
		});
});

module.exports = router;

const bcrypt = require('bcryptjs');
const db = require('../ownerRoute/ownerModel.js');

module.exports = function restricted(req, res, next) {
	const { username, password } = req.headers;
	console.log('restricted -> username', username);
	console.log('restricted -> password', password);

	if (username && password) {
		db
			.findBy({ username })
			.first()
			.then((owner) => {
				if (owner && bcrypt.compareSync(password, owner.password)) {
					next();
				} else {
					res.status(401).json({ message: 'Invalid Credentials' });
				}
			})
			.catch((error) => {
				console.log(error);
				res.status(500).json(error);
			});
		res.status(400).json({ message: 'please provide credentials' });
	}
};

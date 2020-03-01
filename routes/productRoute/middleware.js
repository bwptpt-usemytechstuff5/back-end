const db = require('./productModel.js');

module.exports = {
	validateBody,
	validateProductId
};
function validateBody(req, res, next) {
	const body = req.body;

	if (body) {
		if (body) {
			next();
		} else {
			console.log(body);
			res.status(400).json({ error: 'missing required text field' });
		}
	} else {
		res.status(400).json({ error: 'missing post data' });
	}
}

function validateProductId(req, res, next) {
	const { id } = req.params;

	db.findById(id).then((product) => {
		if (product) {
			req.product = product;
			next();
		} else {
			res.status(400).json({ error: 'invalid product id' });
		}
	});
}

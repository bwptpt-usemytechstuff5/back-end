const knex = require('knex');
const configureOptions = require('../../knexfile').development;
const db = knex(configureOptions);

module.exports = {
	find,
	findById,
	insert,
	update,
	remove
};

function find() {
	return db('product');
}

function findById(id) {
	return db('product').where({ id }).first();
}

function insert(newProduct) {
	return db('product').insert(newProduct, 'id').then((ids) => {
		return findById(ids[0]);
	});
}

function update(id, changes) {
	return db('product').where({ id }).update(changes);
}

function remove(id) {
	return db('product').where('id', id).del();
}

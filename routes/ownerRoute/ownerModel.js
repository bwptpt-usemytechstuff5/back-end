const knex = require('knex');
const configureOptions = require('../../knexfile').development;
const db = knex(configureOptions);

module.exports = {
	add,
	find,
	findBy,
	findById
};

function find() {
	return db('owner').select('id', 'username');
}

function findBy(filter) {
	return db('owner').select('id', 'username', 'password').where(filter);
}

function add(newOwner) {
	return db('owner').insert(newOwner, 'id').then((ids) => {
		const [ id ] = ids;
		return findById(id);
	});
}

function findById(id) {
	return db('owner').select('id', 'username').where({ id }).first();
}

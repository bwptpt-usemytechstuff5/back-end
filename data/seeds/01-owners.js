exports.seed = function(knex) {
	return knex('owner').insert([
		{ username: 'Alex15', password: '' },
		{ username: 'Joe', password: '' },
		{ username: 'Larry25', password: '' }
	]);
};

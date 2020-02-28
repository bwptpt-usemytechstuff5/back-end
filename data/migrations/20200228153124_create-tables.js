exports.up = function(knex) {
	return knex.schema
		.createTable('owner', (tbl) => {
			tbl.increments();
			tbl.string('username').notNullable().unique();
			tbl.string('password').notNullable();
		})
		.createTable('product', (tbl) => {
			tbl.increments();
			tbl
				.integer('owner_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('owner')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			tbl.string('product_type').notNullable();
			tbl.string('product_model').notNullable();
			// foreign key

			tbl.string('product_description');
			tbl.integer('rental_price').notNullable();
		});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('product').dropTableIfExists('owner');
};

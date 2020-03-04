exports.seed = function(knex) {
	return knex('product').insert([
		{
			product_type: 'TV',
			product_model: 'Sony',
			product_description: '100 inch sony Lcd tv',
			rental_price: 1500
		},
		{
			product_type: 'Audio',
			product_model: 'Numark',
			product_description: 'entire DJ set, speakers, turntable, mixer.',
			rental_price: 1200
		},
		{
			product_type: 'Computer',
			product_model: 'Dell',
			product_description: '15 inch Dell laptop',
			rental_price: 700
		},
		{
			product_type: 'TV',
			product_model: 'Sony',
			product_description: 'Sony 4k projector compact',
			rental_price: 3000
		},
		{
			product_type: 'Audio',
			product_model: 'Bose',
			product_description: 'big party speakers',
			rental_price: 1000
		},
		{
			product_type: 'Camera',
			product_model: 'Canon',
			product_description: '',
			rental_price: 500
		}
	]);
};

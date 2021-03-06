// Update with your config settings.

module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: './data/techStuff.db3'
		},
		useNullAsDefault: true,
		pool: {
			afterCreate: (conn, done) => {
				conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
			}
		},
		migrations: {
			directory: './data/migrations'
		},
		seeds: {
			directory: './data/seeds'
		}
	},

	production: {
		client: 'pg',
		connection: process.env.DATABASE_URL,
		migrations: {
			directory: './data/migrations'
		},
		seeds: {
			directory: './data/seeds'
		}
	}
};

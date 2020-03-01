require('dotenv').config();

const server = require('./server.js');

// todo add env tool for heroku

const port = process.env.PORT || 5000;

server.listen(port, () => {
	console.log(`server running on http://localhost:${port}`);
});

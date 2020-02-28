const express = require('express');
const server = express();

// middleware
server.use(express.json());

server.use('/api', (req, res) => {
	res.send('hello from api');
});

module.exports = server;

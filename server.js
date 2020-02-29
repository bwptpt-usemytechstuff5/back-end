const express = require('express');
const server = express();
const productRouter = require('./routes/productRouter');
// middleware
server.use(express.json());

server.use('/api/products', productRouter);

module.exports = server;

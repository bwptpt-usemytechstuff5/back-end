const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const server = express();
const productRouter = require('./routes/productRoute/productRouter.js');

// middleware
server.use(express.json());
server.use(morgan('combined'));
server.use(cors());
server.use(helmet());

server.use('/api/products', productRouter);

module.exports = server;

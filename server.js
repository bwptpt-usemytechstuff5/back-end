const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

const productRouter = require('./routes/productRoute/productRouter.js');
const ownerRouter = require('./routes/ownerRoute/ownerRoute.js');
const authRouter = require('./routes/auth/authRouter.js');

// middleware
server.use(express.json());
server.use(morgan('combined'));
server.use(cors());
server.use(helmet());

server.use('/api/products', productRouter);
server.use('/api/owners', ownerRouter);

server.use('/api/', authRouter);

module.exports = server;

'use strict';

const http = require('http');
const compression = require('compression');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);

// Routes
const v1Index = require('./routes/api/v1/index');

app.use(compression());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/api/v1', v1Index);

app.use((req, res) => {
    res.status(404);
    res.json({
        statusCode: 404,
        message: 'Route not found'
    });
});

server.listen(3000, () => {
    console.log('ThreeLow listening on port 3000. Go to http://localhost:3000/');
});
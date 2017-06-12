'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// carga de rutas
var albumRoutes = require('./routes/album');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// configuración de cabeceras

// rutas base
app.use('/api', albumRoutes);

module.exports = app;